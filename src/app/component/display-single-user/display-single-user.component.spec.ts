import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleUserComponent } from './display-single-user.component';

describe('DisplaySingleUserComponent', () => {
  let component: DisplaySingleUserComponent;
  let fixture: ComponentFixture<DisplaySingleUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySingleUserComponent]
    });
    fixture = TestBed.createComponent(DisplaySingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
