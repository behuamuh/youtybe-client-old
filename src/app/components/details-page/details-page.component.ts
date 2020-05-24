import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/servises/videos.service';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private videosService: VideosService) { }
  video: Video<string>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.videosService.getVideos().subscribe(videos => {
      this.video = videos.find(v => v.id === id);
    });
  }

}
