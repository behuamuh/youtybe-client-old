import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/servises/videos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = '';
  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
  }

  handleSearch(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    this.videosService.loadVideos();
    console.log('Search:', this.search);
    this.search = '';
  }

}
