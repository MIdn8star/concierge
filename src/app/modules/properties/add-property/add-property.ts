import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Property} from '../../../core/services/property';

@Component({
  selector: 'app-add-property',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-property.html',
  styleUrl: './add-property.scss',
  standalone: true
})
export class AddProperty {
  private fb = inject(FormBuilder);
  private propertyService = inject(Property);
  private router = inject(Router);

  addPropertyForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    description: ['']
  });

  isSubmitting = false;

  async submitForm() {
    if (this.addPropertyForm.invalid) {
      this.addPropertyForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
      this.propertyService.addProperty(this.addPropertyForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['/properties']);
        },
        error: (err) => {
          console.error(err);
          this.isSubmitting = false;
        }
      });

  }
}
