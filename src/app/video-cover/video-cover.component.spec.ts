import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoverComponent } from './video-cover.component';

describe('VideoCoverComponent', () => {
  let component: VideoCoverComponent;
  let fixture: ComponentFixture<VideoCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
