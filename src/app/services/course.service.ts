import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  acceptCourse(courseId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${courseId}/accept`, {});
  }

  fetchTrainerName(trainerId: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/users/find/${trainerId}`);
  }
  
}
