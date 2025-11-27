import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./bookings/bookings').then(m => m.Bookings)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-booking/add-booking').then(m => m.AddBooking)
  },
  // {
  //   path: ':id',
  //   loadComponent: () =>
  //     import('./view-inquiry.component').then(m => m.ViewInquiryComponent)
  // }
];
