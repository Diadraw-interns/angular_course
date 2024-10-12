import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Blog } from '../types';

@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  imports: [CommonModule],
})
export class ListItemComponent {
  @ContentChild('image', { read: TemplateRef })
  imageRef!: TemplateRef<any>;
  @ContentChild('title', { read: TemplateRef })
  titleRef!: TemplateRef<any>;
  @ContentChild('description', { read: TemplateRef })
  descriptionRef!: TemplateRef<any>;

  @Input({ required: true }) data!: Blog;
}
