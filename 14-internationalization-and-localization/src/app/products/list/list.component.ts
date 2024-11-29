import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/models';
import { ProductService } from '../product.service';
import { CardComponent } from '../card/card.component';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onAddProductToCard(product: Product) {
    console.log(product);
    this.cartService.addProductToCart(product);
  }
}
