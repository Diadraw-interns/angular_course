import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Product } from './product';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

type Result<T> = {
  data: T;
  error: any;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private tagsUrl = 'api/tags';

  constructor(private http: HttpClient) {}

  // Вземете всички тагове от сървъра. -> this.http.get<string[]>(this.tagsUrl)
  // Създайте сигнал, който да съхранява стойностите на таговете.
  private tagsResult$: Observable<Result<string[]>> = this.http
    .get<string[]>(this.tagsUrl)
    .pipe(
      map((tags) => {
        return { data: tags, error: null };
      }),
      catchError((err) => {
        return of({ data: [], error: err });
      })
    );

  private tagsResult = toSignal(this.tagsResult$, {
    initialValue: { data: [], error: null },
  });

  tags = computed(() => {
    return this.tagsResult().data;
  });

  // Създайте сигнал за съхранение на избрания таг.
  // Създайте функция за промяна на избрания таг.
  selectedTag = signal('');
  setSelectedTag(tag: string) {
    this.selectedTag.set(tag);
  }

  // Вземете продуктите от сървъра според избрания таг. -> използвайте тази заявка за филтриране на продуктите this.http.get<Product[]>(this.productsUrl, {params: tag ? { tag } : {},})
  // Създайте сигнал за съхранение на продуктите, върнати въз основа на избрания таг.
  private productsResult$: Observable<Result<Product[]>> = toObservable(
    this.selectedTag
  ).pipe(
    switchMap((tag) => {
      return this.http.get<Product[]>(this.productsUrl, {
        params: tag ? { tag } : {},
      });
    }),
    map((products) => {
      return { data: products, error: null };
    }),
    catchError((err) => {
      return of({ data: [], error: err });
    })
  );

  private productsResult = toSignal(this.productsResult$, {
    initialValue: { data: [], error: null },
  });

  products = computed(() => {
    return this.productsResult().data;
  });

  error = computed(() => {
    return this.productsResult().error || this.tagsResult().error;
  });
}
