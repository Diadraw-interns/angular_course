import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  // Създайте входен параметър, който да приема и променя стойността на полето.
  filter = model('');
}
