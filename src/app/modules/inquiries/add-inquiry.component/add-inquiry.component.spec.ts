import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInquiryComponent } from './add-inquiry.component';

describe('AddInquiryComponent', () => {
  let component: AddInquiryComponent;
  let fixture: ComponentFixture<AddInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInquiryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
