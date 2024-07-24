import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  bookingForm;
  dateFormat = 'dd/MM/yyyy';
  constructor(private formBuilder: FormBuilder) {
    this.bookingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
        ],
      ],
      total: ['1', Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
  }
  onSubmit() {
    if (!this.bookingForm.valid) {
      if (this.bookingForm.controls.date?.errors) {
        toast.error('Date is required');
      } else if (this.bookingForm.controls.time?.errors) {
        toast.error('Time is required');
      } else if (this.bookingForm.controls.name?.errors) {
        if (this.bookingForm.controls.name?.errors['required']) {
          toast.error('Name is required');
          return;
        }
        toast.error('Invalid name');
      } else if (this.bookingForm.controls.phone?.errors) {
        if (this.bookingForm.controls.phone?.errors['required']) {
          toast.error('Phone number is required');
          return;
        }
        toast.error('Invalid phone number');
      }
    } else {
      console.log(this.bookingForm.value);
    }
  }
}
