import { Routes } from '@angular/router';
import { ListComponent as ProductListComponent } from './products/list/list.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
