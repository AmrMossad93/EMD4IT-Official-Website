import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFeedsComponent } from './instagram-feeds.component';

describe('InstagramFeedsComponent', () => {
  let component: InstagramFeedsComponent;
  let fixture: ComponentFixture<InstagramFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
