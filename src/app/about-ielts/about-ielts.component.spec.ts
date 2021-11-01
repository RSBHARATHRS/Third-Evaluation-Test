import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIELTSComponent } from './about-ielts.component';

describe('AboutIELTSComponent', () => {
  let component: AboutIELTSComponent;
  let fixture: ComponentFixture<AboutIELTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIELTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIELTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
