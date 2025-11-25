import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InquiryService} from '../../../core/services/inquiry.service';

@Component({
  selector: 'app-inquiry.component',
  imports: [],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss',
  standalone: true
})
export class InquiryComponent implements OnInit {

  inquiryService = inject(InquiryService);
  router = inject(Router);

  inquiries: any[] = [];
  page = 1;
  limit = 10;
  total = 0;

  loading = false;

  ngOnInit() {
    this.loadInquiries();
  }

  loadInquiries() {
    this.loading = true;

    this.inquiryService.getInquiries(this.page, this.limit).subscribe({
      next: (res: any) => {
        this.inquiries = res.data || res.inquiries || [];
        this.total = res.total || 0;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading inquiries:', err);
        this.loading = false;
      }
    });
  }

  nextPage() {
    if (this.page * this.limit < this.total) {
      this.page++;
      this.loadInquiries();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadInquiries();
    }
  }

  addInquiry() {
    this.router.navigateByUrl('/inquiries/add');
  }


  editInquiry(id: number) {
    this.router.navigate(['/inquiries/edit', id]);
  }

  viewInquiry(id: number) {
    this.router.navigate(['/inquiries/view', id]);
  }
}
