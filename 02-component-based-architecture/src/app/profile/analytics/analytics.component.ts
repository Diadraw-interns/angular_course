import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
  @Input({ required: true }) title!: string;
}
