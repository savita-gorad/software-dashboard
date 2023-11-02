import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserSectionComponent } from './new-user-section.component';

describe('NewUserSectionComponent', () => {
  let component: NewUserSectionComponent;
  let fixture: ComponentFixture<NewUserSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserSectionComponent]
    });
    fixture = TestBed.createComponent(NewUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
