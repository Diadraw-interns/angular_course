import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../data';

@Component({
  selector: 'app-catalog-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input({ required: true }) courses!: ICourse[];

  @Output() changeFilter = new EventEmitter<string>();

  onChangeFilter(courseId: string) {
    this.changeFilter.emit(courseId);
  }
}
