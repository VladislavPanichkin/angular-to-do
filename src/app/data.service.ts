import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TaskInterface } from './TaskInterface';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private url = "http://localhost:3000";

  getTasks(): Observable<any> {
    return of(this.http.get(`${this.url}/tasks`))
  }

  createTask(task: TaskInterface): void {
    this.http.post<any>(`${this.url}/tasks`, task).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  toggleTask(task: Object, id: number): Observable<any> {    
    return this.http.put(`${this.url}/tasks/${id}`, task)
  }

  deleteTask(task: number): Observable<any>{
    return (this.http.delete(`${this.url}/tasks/${task}`));
  }
}