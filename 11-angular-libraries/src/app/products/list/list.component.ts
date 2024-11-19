import { Component, OnInit } from '@angular/core';
import { addProductToCart } from '../../state/cart';
import { AppState } from '../../state';
import { Store } from '@ngrx/store';
import { Product } from '../../domain/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {}

  onAddProductToCard(product: Product) {
    this.store.dispatch(addProductToCart({ product }));
  }

  ngOnInit(): void {
    // TODO: Премахни взимането на продукти от компонента
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
