import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHall } from './add-hall';

describe('AddHall', () => {
  let component: AddHall;
  let fixture: ComponentFixture<AddHall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
