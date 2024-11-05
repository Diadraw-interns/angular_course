import { Component } from '@angular/core';
import { defaultProducts } from '../data';
import { Product } from '../../state/cart';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  products: Product[] = defaultProducts;

  onAddProductToCard(product: Product) {
    // TODO: да се добави продуктът към количката
  }
}
