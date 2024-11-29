import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from '../domain/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      tap((data) => console.log(data)),
      map((data) =>
        data.map((p: any) => {
          return {
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
          };
        })
      )
    );
  }
}
