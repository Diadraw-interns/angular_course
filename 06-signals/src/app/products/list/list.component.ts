import { Component, signal } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

type ProductList = Product & {
  buyAllPrice: number;
};

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  // Вземете таговете от service-a
  tags = signal([]);
  // Вземете селектирания таг от service-a
  selectedTag = signal('');

  // Вземете всички продукти от service-a
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {}

  handleTagChange(tag: string) {
    // Променете селекирания таг в service-a
  }
}
