import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindATestCenterComponent } from './find-a-test-center.component';

describe('FindATestCenterComponent', () => {
  let component: FindATestCenterComponent;
  let fixture: ComponentFixture<FindATestCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindATestCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindATestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
