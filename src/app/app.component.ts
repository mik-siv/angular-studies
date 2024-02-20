import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from "./model/course";
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses: Course[] = [...COURSES];
  title: string = this.courses[0].description
  startDate: Date = new Date('2000-01-01');

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>

  ngAfterViewInit() {
    console.log(this.cards)
  }

  onCourseSelected(course: Course) {
    console.log(course)
  }

  trackCourse(course: Course) {
    return course.id
  }
}
