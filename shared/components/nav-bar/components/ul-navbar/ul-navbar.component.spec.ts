import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlNavbarComponent } from './ul-navbar.component';

describe('UlNavbarComponent', () => {
  let component: UlNavbarComponent;
  let fixture: ComponentFixture<UlNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
