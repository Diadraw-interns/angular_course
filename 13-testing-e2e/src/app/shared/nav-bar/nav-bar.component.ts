import { Component, computed, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  routes: {
    path: string;
    label: string;
  }[] = [];

  totalCartItems = computed(() => {
    const cart = this.cartService.getCart();

    return cart().items.length;
  });

  constructor(private cartService: CartService) {}
}
