import { Directive, Input, ElementRef, OnInit } from '@angular/core';

const DAY = 1000 * 60 * 60 * 24;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective implements OnInit {
  @Input() appCardColor: string;

  constructor(private el: ElementRef) { }

  getBorderColor() {
    const interval = new Date().getTime() - new Date(this.appCardColor).getTime();
    if (interval < WEEK) return 'blue';

    if (interval < MONTH) return 'green';

    if (interval < 6 * MONTH) return 'yellow';

    return 'red';
  }

  ngOnInit() {
    this.el.nativeElement.style.borderBottom = `5px solid ${this.getBorderColor()}`;
  }
}
