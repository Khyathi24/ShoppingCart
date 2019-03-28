
import { Component } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})

export class CoursesComponent {
  title: string = "List of authors :";
  courses;
  colSpan=3;
showDetails:boolean=true;
 
  constructor(authser:CourseService) {
    
    this.courses = authser.getList();
   
  }
  
  toggle(){
    this.showDetails=!this.showDetails;
  }
}
