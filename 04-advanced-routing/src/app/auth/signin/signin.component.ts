import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  username: string = '';
  constructor(private router: Router, private authSvc: AuthService) {
    this.username = authSvc.getUser() || '';
  }

  signIn() {
    this.authSvc.login(this.username);

    this.router.navigate(['/dashboard']);
  }
}
