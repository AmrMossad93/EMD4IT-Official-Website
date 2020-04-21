import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBackLastCardComponent } from './profile-back-last-card.component';

describe('ProfileBackLastCardComponent', () => {
  let component: ProfileBackLastCardComponent;
  let fixture: ComponentFixture<ProfileBackLastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBackLastCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBackLastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
