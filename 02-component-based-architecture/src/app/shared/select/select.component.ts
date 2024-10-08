import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

export type SelectOption = { label: string; value: string };

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @ContentChild('selectTemplate', { read: TemplateRef })
  selectTemplate!: TemplateRef<any>;

  @Input({ required: true }) value!: string;
  @Input({ required: true }) options!: SelectOption[];

  @Output() changeSelection = new EventEmitter<string>();

  onSelectionChange(e: Event) {
    const newValue = (e.target as HTMLSelectElement).value;
    this.changeSelection.emit(newValue);
  }
}
