import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { map, take, debounceTime, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Video } from '../models/video';
import { VideoListResponse } from '../models/video-list-response';

const key = environment.API_KEY;
const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}`;
const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${key}`;

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos$: BehaviorSubject<Video<string>[]> = new BehaviorSubject<Video<string>[]>([]);
  sortType: string = 'default';
  filterToken: string = '';

  constructor(private http: HttpClient) {
  }

  sort(videos: Video<string>[]) {
    const result = [...videos];

    switch (this.sortType) {
      case 'date':
        result.sort((a, b) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime())
        break;

      case 'date':
        result.sort((a, b) => +a.statistics.viewCount - +a.statistics.viewCount)
        break;
    }

    return result;
  }

  filter(videos: Video<string>[]) {
    return this.filterToken
      ? videos.filter(video => video.snippet.title.includes(this.filterToken))
      : videos;
  }

  search(query: string) {
    const url = `${searchUrl}&type=video&part=snippet&maxResults=15&q=${query}`;
    this.http.get<VideoListResponse<{ kind: string; videoId: string }>>(url).pipe(
      map(res => res.items.map(item => item.id.videoId).join(',')),
      map(ids => {
        const itemUrl = `${videosUrl}&id=${ids}&part=snippet,statistics`;
        return this.http.get<VideoListResponse<string>>(itemUrl);
      }),
      map(stream$ => stream$.subscribe(res => this.videos$.next(res.items))),
      catchError(err => {
        console.error(err);
        return EMPTY;
      }),
    ).subscribe(() => console.log(query));
  }

  getVideos() {
    return this.videos$;
  }

  setSortType(type: string) {
    this.sortType = type;
  }

  setFilterToken(token: string) {
    this.filterToken = token;
  }
}
