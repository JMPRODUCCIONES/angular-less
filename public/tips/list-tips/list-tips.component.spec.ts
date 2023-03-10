import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipsComponent } from './list-tips.component';

describe('ListTipsComponent', () => {
  let component: ListTipsComponent;
  let fixture: ComponentFixture<ListTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
