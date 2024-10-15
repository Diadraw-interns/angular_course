import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
];
