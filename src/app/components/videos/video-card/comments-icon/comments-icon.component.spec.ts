import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsIconComponent } from './comments-icon.component';

describe('CommentsIconComponent', () => {
  let component: CommentsIconComponent;
  let fixture: ComponentFixture<CommentsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
