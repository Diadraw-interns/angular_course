import { Component, computed, Input, input, signal } from '@angular/core';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  // Създайте входен параметър от тип сигнал
  filterString = input('', {
    transform: (value: string) => value.toLowerCase(),
  });

  // Създайте филтрирани тагове, на база входните данни от сигнала
  // При промяна филтрираните тагове трябва автоматично да се обновят
  // Използвайте таговете от ProductService
  filteredTags = computed(() => {
    return this.productService
      .tags()
      .filter((tag) => tag.toLowerCase().includes(this.filterString()));
  });

  constructor(private productService: ProductService) {}
}
