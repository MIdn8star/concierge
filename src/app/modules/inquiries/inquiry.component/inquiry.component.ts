import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inquiry.component',
  imports: [],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss',
  standalone: true
})
export class InquiryComponent implements OnInit {

  inquiries: any[] = [];
  page = 1;
  pageSize = 10;
  totalRecords = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadInquiries();
  }

  loadInquiries() {
    // Replace with API call
    this.inquiries = Array.from({ length: 100 }).map((_, i) => ({
      id: i + 1,
      name: `Customer ${i + 1}`,
      mobile: "9876543210",
      eventDate: "2025-01-15",
      status: i % 2 === 0 ? "NEW" : "FOLLOW-UP",
      createdAt: "2025-01-01",
    }));

    this.totalRecords = this.inquiries.length;
  }

  onPageChange(e: any) {
    this.page = e.pageIndex + 1;
    this.pageSize = e.pageSize;
  }

  addInquiry() {
    this.router.navigate(['/inquiries/add']);
  }

  editInquiry(id: number) {
    this.router.navigate(['/inquiries/edit', id]);
  }

  viewInquiry(id: number) {
    this.router.navigate(['/inquiries/view', id]);
  }
}
