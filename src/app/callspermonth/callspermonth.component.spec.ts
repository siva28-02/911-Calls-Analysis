import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallspermonthComponent } from './callspermonth.component';

describe('CallspermonthComponent', () => {
  let component: CallspermonthComponent;
  let fixture: ComponentFixture<CallspermonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallspermonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallspermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
