import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/servises/videos.service';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[];
  constructor(private videosService: VideosService) {
  }

  ngOnInit(): void {
    this.videosService.getVideos().subscribe(videos => this.videos = videos);
  }

}
