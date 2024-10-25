import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
];
