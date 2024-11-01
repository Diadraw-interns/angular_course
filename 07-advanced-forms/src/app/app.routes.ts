import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: '',
    redirectTo: 'signUp',
    pathMatch: 'full',
  },
];
