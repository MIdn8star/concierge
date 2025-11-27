import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookingService} from '../../../core/services/booking.service';

@Component({
  selector: 'app-add-booking',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-booking.html',
  styleUrl: './add-booking.scss',
  standalone: true
})
export class AddBooking {
  fb = inject(FormBuilder);
  bookingService = inject(BookingService);
  router = inject(Router);

  submitting = false;

  form = this.fb.group({
    propertyId: [null, Validators.required],
    floorId: [null],
    hallId: [null],
    inquiryId: [null],
    eventId: [null],
    userId: [null],

    bookingDate: ['', Validators.required],
    slotName: ['', Validators.required],

    guestName: ['', Validators.required],
    guestMobile: ['', Validators.required],
    guestAlternate: [''],
    guestEmail: [''],
    guestAddress: [''],

    eventType: ['', Validators.required],
    expectedGuests: ['', Validators.required],
    menuId: [null],
    extraPlatePrice: [null],

    addons: [''],          // JSON text
    extraCharges: [''],    // JSON text

    internalNotes: [''],
    customerNotes: [''],

    totalPackage: ['', Validators.required],
    advancePaid: [0],
    reAdvancePaid: [0],
    balanceAmount: ['', Validators.required],

    status: ['PENDING']
  });

  submit() {
    if (this.form.invalid) return;

    this.submitting = true;

    const raw = this.form.value;

    const payload = {
      ...raw,
      bookingDate: new Date(raw.bookingDate!).toISOString(),

      addons: raw.addons ? JSON.parse(raw.addons) : null,
      extraCharges: raw.extraCharges ? JSON.parse(raw.extraCharges) : null,
    };

    this.bookingService.createBooking(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/bookings']);
      },
      error: () => this.submitting = false
    });
  }
}
