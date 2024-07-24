import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      if (this.contactForm.controls.name?.errors) {
        if (this.contactForm.controls.name?.errors['required']) {
          toast.error('Name is required');
          return;
        }
        toast.error('Invalid name');
      } else if (this.contactForm.controls.email?.errors) {
        if (this.contactForm.controls.email?.errors['required']) {
          toast.error('Email is required');
          return;
        }
        toast.error('Invalid email');
      } else if (this.contactForm.controls.subject?.errors) {
        toast.error('Subject cannot be empty');
      } else if (this.contactForm.controls.message?.errors) {
        toast.error('Message cannot be empty');
      }
    }
  }
}
