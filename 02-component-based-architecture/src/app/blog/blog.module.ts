import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, BlogRoutingModule, ListItemComponent],
})
export class BlogModule {}
