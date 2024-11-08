import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state';
import { Observable } from 'rxjs';
import { selectCartItemsCount } from '../../state/cart';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  routes: {
    path: string;
    label: string;
  }[] = [];

  totalCartItems: Observable<number> = this.store.select(selectCartItemsCount);

  constructor(private store: Store<AppState>) {}
}
