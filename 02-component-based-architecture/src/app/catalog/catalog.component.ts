import { Component } from '@angular/core';
import { classCatalog, IClass, ICourse, courses } from './data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  coursesData: ICourse[] = courses;
  classesData: IClass[] = [...classCatalog];

  onFilterClasses(courseId: string) {
    if (courseId === 'All') {
      this.classesData = [...classCatalog];
      return;
    }

    this.classesData = classCatalog.filter(
      (classData) => classData.course.id === courseId
    );
  }
}
