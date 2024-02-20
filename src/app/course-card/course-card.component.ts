import {AfterViewInit, Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Course} from "../model/course";
import {CourseImageComponent} from "../course-image/course-image.component";

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {

  @Input({required: true})
  course: Course;

  @Input({required: true})
  index: number;

  @Output()
  courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  ngAfterViewInit() {
    console.log(this.image)
  }

  cardClasses() {
    return {
      'beginner': this.course.category === 'BEGINNER'
    }
  }

  cardStyles() {
    return {'text-decoration': 'underline'}
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }
}
