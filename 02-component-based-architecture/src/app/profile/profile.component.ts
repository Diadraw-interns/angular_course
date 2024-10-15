import { Component, Type } from '@angular/core';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommonModule } from '@angular/common';
import { profileWidgets } from './data';
import {
  SelectComponent,
  SelectItemDirective,
  SelectOption,
} from '../shared/select/select.component';

const widgetKeys: { [widgetId: string]: Type<any> } = {
  analytics: AnalyticsComponent,
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SelectComponent,SelectItemDirective],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  selectedOption: string = '';
  options: SelectOption[] = [
    { label: 'option 1', value: 'option1' },
    { label: 'option 2', value: 'option2' },
    { label: 'option 3', value: 'option3' },
  ];

  widgets: { inputs: any; component: Type<any> }[] = [];

  ngOnInit(): void {
    profileWidgets.forEach((widget) => {
      this.widgets.push({
        ...widget,
        component: widgetKeys[widget.widgetId],
      });
    });
  }
}
