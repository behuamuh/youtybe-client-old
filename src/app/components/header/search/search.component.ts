import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { VideosService } from 'src/app/servises/videos.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  constructor(private videosService: VideosService) { }

  @ViewChild('input') search: ElementRef;
  subscription: Subscription;

  ngAfterViewInit(): void {
    const search$ = fromEvent(this.search.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(1000),
    );

    this.subscription = search$.subscribe(search => this.videosService.search(search));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
