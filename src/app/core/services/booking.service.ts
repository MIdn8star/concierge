import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private http = inject(HttpClient);

  private BASE_URL = '/api/v1/bookings';

  getBookings(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  createBooking(payload: any): Observable<any> {
    return this.http.post(this.BASE_URL, payload);
  }
}
