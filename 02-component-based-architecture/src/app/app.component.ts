import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-based-architecture';
}
