import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ai-resume-generator';
  user: User | null = null;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    // Listen for authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  logout() {
    this.router.navigate(['/register']);
    signOut(this.auth);
  }
}
