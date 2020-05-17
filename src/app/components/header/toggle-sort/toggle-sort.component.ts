import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-sort',
  templateUrl: './toggle-sort.component.html',
  styleUrls: ['./toggle-sort.component.scss']
})
export class ToggleSortComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.toggle.emit();
  }

}
