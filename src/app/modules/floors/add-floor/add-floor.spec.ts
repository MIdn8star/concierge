import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFloor } from './add-floor';

describe('AddFloor', () => {
  let component: AddFloor;
  let fixture: ComponentFixture<AddFloor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFloor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFloor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
