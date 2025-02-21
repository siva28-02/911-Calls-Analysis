import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsperstateComponent } from './callsperstate.component';

describe('CallsperstateComponent', () => {
  let component: CallsperstateComponent;
  let fixture: ComponentFixture<CallsperstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsperstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsperstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
