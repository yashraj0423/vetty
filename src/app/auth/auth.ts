import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly email = 'admin@test.com';
  private readonly password = 'admin123';

  login(data: { email: string; password: string }): boolean {
    if (data.email === this.email && data.password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
