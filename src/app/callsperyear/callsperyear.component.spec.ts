import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsperyearComponent } from './callsperyear.component';

describe('CallsperyearComponent', () => {
  let component: CallsperyearComponent;
  let fixture: ComponentFixture<CallsperyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsperyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsperyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
