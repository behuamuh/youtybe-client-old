import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { SortingService } from 'src/app/servises/sorting.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video<string>[];
  constructor(private sortingService: SortingService) {
  }

  ngOnInit(): void {
    this.sortingService.getVideos().subscribe(videos => this.videos = videos);
  }

}
