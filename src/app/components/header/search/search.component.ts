import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleSearch(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    console.log('Search:', this.search);
    this.search = '';
  }

}
