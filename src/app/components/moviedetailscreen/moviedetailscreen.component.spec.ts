import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailscreenComponent } from './moviedetailscreen.component';

describe('MoviedetailscreenComponent', () => {
  let component: MoviedetailscreenComponent;
  let fixture: ComponentFixture<MoviedetailscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
