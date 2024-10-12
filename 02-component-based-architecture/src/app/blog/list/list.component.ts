import { Component } from '@angular/core';
import { Blog } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  items: Blog[] = [
    {
      id: '1',
      title: 'New Blog',
      description: 'Blog 1 description',
      imageHref: 'https://picsum.photos/200/300',
    },
  ];
}
