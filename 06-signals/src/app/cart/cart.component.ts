import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  // Създайте сигнали за количество и цена.
  // Сигналът за цена в момента няма да се променя, затова може да му зададете произволна стойност.
  // Създайте сигнал за обща цена, който се преизчислява при промяна на цената или количеството.
  // Необходими са функции за промяна на стойността на количеството. (increase, decrease)
  // Когато количеството надвиши 5, в консолата трябва да се изведе съобщение.
  // При надвишаване на количеството от 10, на екрана трябва да се покаже съобщение за грешка
}
