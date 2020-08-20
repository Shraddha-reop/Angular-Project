import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistscreenComponent } from './movielistscreen.component';

describe('MovielistscreenComponent', () => {
  let component: MovielistscreenComponent;
  let fixture: ComponentFixture<MovielistscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovielistscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
