import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/servises/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  filter = '';
  constructor(private sortingService: SortingService) { }

  ngOnInit(): void {
  }

  handleFilter() {
    this.sortingService.setFilterToken(this.filter);
  }

  handleSort(type: string) {
    this.sortingService.setSortType(type);
  }
}
