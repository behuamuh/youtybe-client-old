import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  filter = '';
  sortType = 'date';
  constructor() { }

  ngOnInit(): void {
  }

  handleFilter() {
    console.log('Filter:', this.filter);
  }

  handleSort(type: string) {
    this.sortType = type;
    console.log('Sort:', this.sortType);
  }
}
