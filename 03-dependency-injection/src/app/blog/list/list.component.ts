import { Component} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [ListItemComponent],
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useValue: {
  //       log(message: string, data?: any) {
  //         console.log('List component service->', message, data);
  //       },
  //     },
  //   },
  // ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('List component');
  }
}
