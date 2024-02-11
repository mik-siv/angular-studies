import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from "./model/course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = [...COURSES];
  title: string = this.courses[0].description
  startDate: Date = new Date('2000-01-01')

  onCourseSelected(course: Course) {
    console.log(course)
  }

  trackCourse(course: Course) {
    return course.id
  }
}
