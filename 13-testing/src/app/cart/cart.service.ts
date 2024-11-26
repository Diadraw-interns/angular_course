import { Injectable, signal } from '@angular/core';
import { Product } from '../domain/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<{ items: Product[] }>({ items: [] });

  constructor() {}

  addProductToCart(product: Product) {
    this.cart.set({ items: [...this.cart().items, product] });
  }

  getCart() {
    return this.cart;
  }
}
