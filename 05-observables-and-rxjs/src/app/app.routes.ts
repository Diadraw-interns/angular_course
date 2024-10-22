import { Routes } from '@angular/router';
import { ListComponent as ProductsListComponent } from './products/list/list.component';
import { DetailsComponent as ProductDetailsComponent } from './products/details/details.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
