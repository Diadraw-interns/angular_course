import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  // Създайте форма за регистрация
  // Формата трябва да съдържа потребителско име и парола, потвърдена парола, години и адрес,
  // като адресът трябва да включва град, улица и пощенски код."
}
