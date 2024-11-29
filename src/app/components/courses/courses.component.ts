import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  trainerName: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        this.courses.forEach((course) => {
          // For each course, fetch the trainer's name by the trainer's ID
          this.courseService.fetchTrainerName(course.trainerId).subscribe(
            (trainerData) => {
              // Assign full name to the course object
              course.trainerName = trainerData.firstName + ' ' + trainerData.lastName;
            },
            (error) => {
              console.error('Error fetching trainer name:', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  

  // Accept course and refresh the list of courses
  acceptCourse(courseId: string) {
    console.log('Accepting course:', courseId);
    this.courseService.acceptCourse(courseId).subscribe(
      () => {
        this.fetchCourses(); // Refresh the list of courses
      },
      (error) => {
        console.error('Error accepting course:', error);
      }
    );
  }
}
