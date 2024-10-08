import { Component, Type } from '@angular/core';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommonModule } from '@angular/common';
import { profileWidgets } from './data';
import { SelectComponent } from '../shared/select/select.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  options = [
    { label: 'option 1', value: 'option1' },
    { label: 'option 2', value: 'option2' },
    { label: 'option 3', value: 'option3' },
  ];
  selectedOption: string = '';

  widgetKeys: { [widgetId: string]: Type<any> } = {
    analytics: AnalyticsComponent,
  };
  widgets: { inputs: any; component: Type<any> }[] = [];

  ngOnInit(): void {
    profileWidgets.forEach((widget) => {
      this.widgets.push({
        ...widget,
        component: this.widgetKeys[widget.widgetId],
      });
    });
  }
}
