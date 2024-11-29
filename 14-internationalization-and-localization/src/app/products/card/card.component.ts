import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  title = input<string>('');
  description = input<string>('');
  price = input<number>(0);
  imageUrl = input<string>('');

  @Output() onAddProductToCard = new EventEmitter();
}
