import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestimoialsComponent } from './student-testimoials.component';

describe('StudentTestimoialsComponent', () => {
  let component: StudentTestimoialsComponent;
  let fixture: ComponentFixture<StudentTestimoialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTestimoialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestimoialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
