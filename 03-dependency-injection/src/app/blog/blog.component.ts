import { Component, Host, Self, SkipSelf } from '@angular/core';
import { ListComponent } from './list/list.component';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ListComponent],
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useValue: {
  //       log(message: string, data?: any) {
  //         console.log('Blog component service->', message, data);
  //       },
  //     },
  //   },
  // ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Blog component');
  }
}
