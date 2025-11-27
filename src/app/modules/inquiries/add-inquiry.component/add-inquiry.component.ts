import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InquiryService } from '../../../core/services/inquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inquiry.component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-inquiry.component.html',
  styleUrl: './add-inquiry.component.scss',
  standalone: true
})
export class AddInquiryComponent implements OnInit {

  fb = inject(FormBuilder);
  inquiryService = inject(InquiryService);
  router = inject(Router);

  isSubmitting = false;

  addInquiryForm = this.fb.group({
    customerName: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    occasion: ['', Validators.required],
    date: ['', Validators.required],       // eventDate
    time: ['', Validators.required],
    pax: ['', Validators.required],        // paxExpected
    notes: ['']                            // single text note (optional)
  });

  ngOnInit(): void {}

  submit() {
    if (this.addInquiryForm.invalid) {
      this.addInquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const form = this.addInquiryForm.value;

    // Build final payload that backend expects
    const payload = {
      customerName: form.customerName!,
      phone: form.phone!,
      occasion: form.occasion!,
      time: form.time!,
      eventDate: form.date ? new Date(form.date).toISOString() : null,
      paxExpected: form.pax ? Number(form.pax) : null,

      // Convert textarea note → InquiryNote[] JSON format
      notes: form.notes
        ? [
          {
            note: form.notes,
            createdBy: 'User', // Replace with actual logged-in user
            createdAt: new Date().toISOString()
          }
        ]
        : []
    };

    this.inquiryService.createInquiry(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/inquiries']);
      },
      error: (err) => {
        console.error(err);
        this.isSubmitting = false;
      }
    });
  }
}
