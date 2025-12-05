import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submitLogin() {
    const ok = this.auth.login({ email: this.email, password: this.password });

    if (ok) {
      this.router.navigate(['/board']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
