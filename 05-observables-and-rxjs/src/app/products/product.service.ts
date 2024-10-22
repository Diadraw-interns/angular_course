import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable } from 'rxjs';
import { Product, Review } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private reviewsUrl = 'api/reviews';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getReview(productId: number): Observable<Review[]> {
    // Use appropriate regular expression syntax to
    // get an exact match on the id
    return this.http.get<Review[]>(
      this.reviewsUrl + '?productId=^' + productId + '$'
    );
  }

  getProductsWithReviews(productId: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + productId);
  }
}
