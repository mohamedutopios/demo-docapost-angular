import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string;
  password: string;
  isRegisterMode: boolean = true;

  constructor(private router: Router, private auth: AuthService) {}

  register() {
    this.auth
      .register({ email: this.email, password: this.password })
      .subscribe(
        (res) => {
          console.log(res);
          alert(res.message);
          this.isRegisterMode = false;
        },
        (err) => {
          console.log(err);
          alert('Inscription failed');
        }
      );
  }

  login() {
    this.auth.login({ email: this.email, password: this.password }).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/presentation']);
      },
      (err) => {
        console.log(err);
        alert('Login failed');
      }
    );
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}
