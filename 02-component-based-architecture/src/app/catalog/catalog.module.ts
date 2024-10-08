import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [FilterComponent, TableComponent, CatalogComponent],
  exports: [CatalogComponent],
  imports: [CommonModule],
})
export class CatalogModule {}
