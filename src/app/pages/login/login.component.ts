import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm;
  registerForm;
  tab = 'login';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }
  onSubmitLogin() {
    if (!this.loginForm.valid) {
      if (this.loginForm.controls.email?.errors) {
        if (this.loginForm.controls.email?.errors['required']) {
          toast.error('Email is required');
          return;
        }
        toast.error('Email is invalid');
      } else if (this.loginForm.controls.password.errors) {
        toast.error('Password is required');
      }
    } else {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email as string, password as string)) {
        toast.success('Login successfully');
      } else {
        toast.error('Wrong email or password');
      }
    }
  }
  onSubmitRegister() {
    if (!this.registerForm.valid) {
      if (this.registerForm.controls.email?.errors) {
        if (this.registerForm.controls.email?.errors['required']) {
          toast.error('Email is required');
          return;
        }
        toast.error('Email is invalid');
      } else if (this.registerForm.controls.password.errors) {
        toast.error('Password is required');
      } else if (this.registerForm.controls.confirm_password.errors) {
        toast.error('Confirm password is required');
      }
    } else {
      if (
        this.registerForm.value.password !==
        this.registerForm.value.confirm_password
      ) {
        toast.error('Password and confirm password are different');
        return;
      }
      console.log(this.registerForm.value);
    }
  }
}
