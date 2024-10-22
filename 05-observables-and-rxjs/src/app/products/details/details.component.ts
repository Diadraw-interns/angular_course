import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input()
  set id(productId: string) {
    this.product$ = this.productService.getProductsWithReviews(
      parseInt(productId)
    );
  }

  product$!: Observable<Product>;

  constructor(private productService: ProductService) {}
}
