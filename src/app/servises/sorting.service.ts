import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../models/video';
import { VideosService } from './videos.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  videos$: BehaviorSubject<Video<string>[]> = new BehaviorSubject<Video<string>[]>([]);
  allVideos: Video<string>[];
  sortType: string = 'default';
  filterToken: string = '';

  constructor(private videosService: VideosService) {
    videosService.getVideos().subscribe(videos => {
      this.allVideos = videos;
      this.videos$.next(this.allVideos);
    });
  }

  updateVideos() {
    const filteredVideos = this.filter(this.allVideos);
    const sortedVideos = this.sort(filteredVideos);
    this.videos$.next(sortedVideos);
  }

  sort(videos: Video<string>[]) {
    const result = [...videos];

    switch (this.sortType) {
      case 'date':
        result.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime())
        break;

      case 'views':
        result.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
        break;
    }

    return result;
  }

  filter(videos: Video<string>[]) {
    return this.filterToken
      ? videos.filter(video => video.snippet.title.toLowerCase().includes(this.filterToken))
      : videos;
  }

  getVideos() {
    return this.videos$;
  }

  setSortType(type: string) {
    this.sortType = type;
    this.updateVideos();
  }

  setFilterToken(token: string) {
    this.filterToken = token.toLowerCase();
    this.updateVideos();
  }
}
