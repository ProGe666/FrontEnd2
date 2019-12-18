import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeVideoComponent } from './prime-video.component';

describe('PrimeVideoComponent', () => {
  let component: PrimeVideoComponent;
  let fixture: ComponentFixture<PrimeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
