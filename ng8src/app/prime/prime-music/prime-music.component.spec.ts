import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMusicComponent } from './prime-music.component';

describe('PrimeMusicComponent', () => {
  let component: PrimeMusicComponent;
  let fixture: ComponentFixture<PrimeMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
