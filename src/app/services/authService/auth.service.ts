import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}
  login(email: string, password: string) {
    if (email === 'hungtt32@fpt.com' && password === '123') {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }
  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
