import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: (res) => {
  //         localStorage.setItem('token', res.token);
  //         this.router.navigate(['/resume-generator']);
  //       },
  //       error: (err) => {
  //         this.errorMessage = "Invalid credentials. Try again!";
  //       }
  //     });
  //   }
  // }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).then(() => {
        this.router.navigate(['/resume-generator']);
      }).catch(error => {
        this.errorMessage = error.message;
      });
    }
  }

  navigateToSignup() {
    this.router.navigate(['/register']);
  }
}