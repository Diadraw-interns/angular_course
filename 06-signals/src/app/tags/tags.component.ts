import { Component, effect, signal } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [ListComponent, FilterComponent],
  templateUrl: './tags.component.html',
})
export class TagsComponent {
  // Създайте сигнал, който съхранява стойността на филтъра.
  filter = signal('');

  // Когато филтърът е с дължина над 5 знака, отпечатайте съобщение в конзолата.
  logEffect = effect(() => {
    if (this.filter().length > 5) {
      console.log('over 5 letters', this.filter());
    }
  });
}
