import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  routes: {
    path: string;
    label: string;
  }[] = [];

  // TODO: да се вземе броя на продукти добавен в количката
  totalCartItems = 0;
}
