import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-video-actions',
  templateUrl: './video-actions.component.html',
  styleUrls: ['./video-actions.component.scss']
})
export class VideoActionsComponent implements OnInit {
  @Input() statistics?: Statistics;

  constructor() { }

  ngOnInit(): void {
  }

}
