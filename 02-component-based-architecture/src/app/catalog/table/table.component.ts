import { Component, Input } from '@angular/core';
import { IClass } from '../data';

@Component({
  selector: 'app-catalog-table',
  templateUrl: './table.component.html',
  styles: ``,
})
export class TableComponent {
  @Input({ required: true }) classesData!: IClass[];
}
