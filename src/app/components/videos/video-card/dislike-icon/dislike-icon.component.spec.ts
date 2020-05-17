import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeIconComponent } from './dislike-icon.component';

describe('DislikeIconComponent', () => {
  let component: DislikeIconComponent;
  let fixture: ComponentFixture<DislikeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
