import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  someFunction() {
    return _.join(['Hello', 'World'], ' ');
  }
}
