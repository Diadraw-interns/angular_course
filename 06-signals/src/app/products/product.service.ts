import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { switchMap } from 'rxjs';
import { Product } from './product';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private tagsUrl = 'api/tags';

  constructor(private http: HttpClient) {}

  // Вземете всички тагове от сървъра. -> this.http.get<string[]>(this.tagsUrl)
  // Създайте сигнал, който да съхранява стойностите на таговете.

  // Създайте сигнал за съхранение на избрания таг.
  // Създайте функция за промяна на избрания таг.

  // Вземете продуктите от сървъра според избрания таг. -> използвайте тази заявка за филтриране на продуктите this.http.get<Product[]>(this.productsUrl, {params: tag ? { tag } : {},})
  // Създайте сигнал за съхранение на продуктите, върнати въз основа на избрания таг.
}
