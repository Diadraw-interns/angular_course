import { Component, effect } from '@angular/core';
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
  tags = this.productService.tags;

  // Вземете селектирания таг от service-a
  selectedTag = this.productService.selectedTag;

  // Вземете всички продукти от service-a
  products = this.productService.products;

  constructor(private productService: ProductService) {
    effect(() => {
      console.log('this.productService.error();', this.productService.error());
    });
  }

  handleTagChange(tag: string) {
    // Променете селекирания таг в service-a
    this.productService.setSelectedTag(tag);
  }
}
