import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProgressBarComponent } from './payment-progress-bar.component';

describe('PaymentProgressBarComponent', () => {
  let component: PaymentProgressBarComponent;
  let fixture: ComponentFixture<PaymentProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
