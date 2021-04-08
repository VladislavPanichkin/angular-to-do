import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TaskInterface } from './TaskInterface';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  _tasks: Array<TaskInterface> = [];

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(`${this.url}/tasks`);
  }

  private url = "http://localhost:3000";

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks: Array<TaskInterface>) {
    this._tasks = tasks;
  }

  createTask(task: TaskInterface): void {
    this.http.post<any>(`${this.url}/tasks`, task).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  toggleTask(task: number) {
    const newTasks: Array<TaskInterface> = this.tasks.map(el => {
      if (el.id === task) {
        el.done = !el.done
      }
      return el
    });
   this.tasks = newTasks;
  }

  deleteTask(task: number) {
    this.http.delete<any>(`${this.url}/tasks/${task}`);
    const newTasks: Array<TaskInterface> = this.tasks.filter(el => el.id !== task);
    this.tasks = newTasks;
  }

  fetchTasks = () => {
    const response =  fetch("http://localhost:3000/tasks")
      .then(data => data.json())
      .then(data => {
        return data
      })
      }
  }