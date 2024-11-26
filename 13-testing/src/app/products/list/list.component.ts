import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/models';
import { ProductService } from '../product.service';
import { CardComponent } from '../card/card.component';
import { CartService } from '../../cart/cart.service';
import { products } from '../data';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  products: Product[] = products;

  constructor(private cartService: CartService) {}

  onAddProductToCard(product: Product) {
    console.log(product);
    this.cartService.addProductToCart(product);
  }
}
