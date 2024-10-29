import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ListComponent as ProductsListComponent } from './products/list/list.component';
import { TagsComponent } from './tags/tags.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'tags',
    component: TagsComponent,
  },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
];
