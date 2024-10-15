import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectItemContext<TData extends SelectOption> {
  $implicit: TData;
  index: number;
}

@Directive({
  standalone: true,
  selector: 'ng-template[selectItem]',
})
export class SelectItemDirective<TData extends SelectOption> {
  @Input('selectItem') data!: TData[];

  static ngTemplateContextGuard<TContextData extends SelectOption>(
    dir: SelectItemDirective<TContextData>,
    ctx: SelectItemContext<TContextData>
  ): ctx is SelectItemContext<TContextData> {
    return true;
  }
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
})
export class SelectComponent<TData extends SelectOption> {
  @ContentChild(SelectItemDirective, { read: TemplateRef })
  selectTemplate!: TemplateRef<SelectItemContext<TData>>;

  @Input({ required: true }) value!: string;
  @Input({ required: true }) options!: SelectOption[];

  @Output() changeSelection = new EventEmitter<string>();

  onSelectionChange(e: Event) {
    const newValue = (e.target as HTMLSelectElement).value;
    this.changeSelection.emit(newValue);
  }
}
