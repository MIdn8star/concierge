import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private http = inject(HttpClient);

  private baseUrl = '/api/v1/inquiries';  // Already used in your project

  getInquiries(page: number, limit: number) {
    return this.http.get(`${this.baseUrl}?page=${page}&limit=${limit}`);
  }

  deleteInquiry(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createInquiry(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
