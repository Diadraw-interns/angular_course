import {
  Component,
  Input,
  OnChanges,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useValue: {
  //       log(message: string, data?: any) {
  //         console.log('List Item component service->', message, data);
  //       },
  //     },
  //   },
  // ],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnChanges {
  @Input() name: string | undefined;

  constructor(private logger: LoggerService) {
    this.logger.log('List item component');
  }

  ngOnChanges(): void {
    // this.logger.log('List item component', this.name);
  }
}
