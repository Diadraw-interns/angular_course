import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  routes = [
    {
      path: 'cart',
      label: 'Cart',
    },
    {
      path: 'products',
      label: 'Products',
    },
    {
      path: 'tags',
      label: 'Tags',
    },
  ];
}
