import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTipsComponent } from './new-tips.component';

describe('NewTipsComponent', () => {
  let component: NewTipsComponent;
  let fixture: ComponentFixture<NewTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
