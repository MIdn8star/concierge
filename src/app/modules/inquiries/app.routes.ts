import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inquiries',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../inquiries/inquiry.component/inquiry.component')
            .then(m => m.InquiryComponent)
      },
      // {
      //   path: 'add',
      //   loadComponent: () =>
      //     import('./modules/inquiries/inquiry-add/inquiry-add.component')
      //       .then(m => m.InquiryAddComponent)
      // },
      // {
      //   path: 'edit/:id',
      //   loadComponent: () =>
      //     import('./modules/inquiries/inquiry-edit/inquiry-edit.component')
      //       .then(m => m.InquiryEditComponent)
      // },
      // {
      //   path: 'view/:id',
      //   loadComponent: () =>
      //     import('./modules/inquiries/inquiry-view/inquiry-view.component')
      //       .then(m => m.InquiryViewComponent)
      // }
    ]
  }
];
