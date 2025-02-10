import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:5000/api/resume';

  constructor(private http: HttpClient) {}

  generateResume(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate`, data);
  }
}
