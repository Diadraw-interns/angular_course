import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private authSvc: AuthService) {
    console.log(this.authSvc.getUser());
  }

  getUser() {
    return this.authSvc.getUser();
  }
}
