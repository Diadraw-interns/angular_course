import { Component, Type } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  lazyComponent: Type<any> | null = null;
  constructor(private authSvc: AuthService) {
    console.log(this.authSvc.getUser());
  }

  async loadComponent() {
    const { AccountComponent } = await import('./account/account.component');
    this.lazyComponent = AccountComponent;
  }

  getUser() {
    return this.authSvc.getUser();
  }
}
