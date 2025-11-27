import { Routes } from '@angular/router';

export const INQUIRY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./inquiry.component/inquiry.component').then(m => m.InquiryComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-inquiry.component/add-inquiry.component').then(m => m.AddInquiryComponent)
  },
  // {
  //   path: ':id',
  //   loadComponent: () =>
  //     import('./view-inquiry.component').then(m => m.ViewInquiryComponent)
  // }
];
