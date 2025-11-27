import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookingService} from '../../../core/services/booking.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [
    DatePipe
  ],
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
  standalone: true
})
export class Bookings implements OnInit {
  private bookingService = inject(BookingService);
  private router = inject(Router);

  bookings: any[] = [];

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getBookings().subscribe(res => {
      this.bookings = res.data || res; // adjust based on your API response
    });
  }

  gotoAdd() {
    this.router.navigate(['/bookings/add']);
  }
}
