import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  courseList: any[] = []
  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.courseList = this.courses.getCourses()
  }
}
