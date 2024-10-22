import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

type ProductList = Product & {
  buyAllPrice: number;
};

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: ProductList[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
