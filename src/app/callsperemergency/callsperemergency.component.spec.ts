import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsperemergencyComponent } from './callsperemergency.component';

describe('CallsperemergencyComponent', () => {
  let component: CallsperemergencyComponent;
  let fixture: ComponentFixture<CallsperemergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsperemergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsperemergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
