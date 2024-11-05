import { Routes } from '@angular/router';
import { ListComponent as ProductsListComponent } from './products/list/list.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
