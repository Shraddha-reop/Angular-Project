import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilegeneratorComponent } from './tilegenerator.component';

describe('TilegeneratorComponent', () => {
  let component: TilegeneratorComponent;
  let fixture: ComponentFixture<TilegeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilegeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
