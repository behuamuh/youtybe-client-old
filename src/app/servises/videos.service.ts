import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import youtubeResponce from '../mocks/youtube-responce';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos$: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);
  constructor() {
  }

  loadVideos() {
    this.videos$.next(youtubeResponce.items);
  }

  getVideos() {
    return this.videos$;
  }
}
