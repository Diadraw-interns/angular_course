import { Component, Host, Optional } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('User component');
  }
}
