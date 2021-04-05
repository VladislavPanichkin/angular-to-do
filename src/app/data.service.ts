import { Injectable } from '@angular/core';

import { TaskInterface } from './TaskInterFace';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Array<TaskInterface> = [
    {id: 1, name: "Angular", description: "Learn Angular thoroughly", done: false},
    {id: 2, name: "React", description: "Learn React thoroughly", done: true},
    {id: 1, name: "Vue", description: "Learn Vue thoroughly", done: false}
  ]
  constructor() { }

  public getTasks():Array<TaskInterface> {
    return this.tasks
  }

  public createTask(task: TaskInterface): void {
    this.tasks.push(task);
  }
}