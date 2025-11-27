
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [

  // PUBLIC ROUTE
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/login/login').then(m => m.Login)
  },

  // PROTECTED APP SHELL
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'inquiries',
        loadChildren: () =>
          import('./modules/inquiries/inquiry.routes').then(r => r.INQUIRY_ROUTES)
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('./modules/bookings/booking.routes').then(r => r.BOOKING_ROUTES)
      },
      {
        path: '',
        redirectTo: 'properties',
        pathMatch: 'full'
      },
      // ADD PROPERTY
      {
        path: 'properties/add',
        loadComponent: () =>
          import('./modules/properties/add-property/add-property')
            .then(m => m.AddProperty)
      },

      // PROPERTY LIST
      {
        path: 'properties',
        loadComponent: () =>
          import('./modules/properties/property-list/property-list')
            .then(m => m.PropertyList)
      },

      // ADD FLOOR
      {
        path: 'floors/add',
        loadComponent: () =>
          import('./modules/floors/add-floor/add-floor')
            .then(m => m.AddFloor)
      },

      // ADD HALL
      {
        path: 'halls/add',
        loadComponent: () =>
          import('./modules/halls/add-hall/add-hall')
            .then(m => m.AddHall)
      },

      // ADD BOOKING
      {
        path: 'bookings/add',
        loadComponent: () =>
          import('./modules/bookings/add-booking/add-booking')
            .then(m => m.AddBooking)
      },

      // BOOKING CALENDAR
      {
        path: 'bookings/calendar',
        loadComponent: () =>
          import('./modules/bookings/booking-calendar/booking-calendar')
            .then(m => m.BookingCalendar)
      },
    ]
  },

  // FALLBACK
  { path: '**', redirectTo: '' }
];
