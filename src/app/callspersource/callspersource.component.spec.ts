import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallspersourceComponent } from './callspersource.component';

describe('CallspersourceComponent', () => {
  let component: CallspersourceComponent;
  let fixture: ComponentFixture<CallspersourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallspersourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallspersourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
