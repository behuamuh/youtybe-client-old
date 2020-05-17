import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsIconComponent } from './views-icon.component';

describe('ViewsIconComponent', () => {
  let component: ViewsIconComponent;
  let fixture: ComponentFixture<ViewsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
