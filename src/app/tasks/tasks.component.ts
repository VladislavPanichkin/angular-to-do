import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { TaskInterface } from '../TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Array<TaskInterface>;
 
  constructor(public dataService: DataService) { 
    this.tasks = []
  }

  ngOnInit(): void {
    this.getTasks();
  }

  selectTask(task: number): void {
    this.dataService.toggleTask(task);
  }

  deleteTask(task: number): void {
    this.dataService.deleteTask(task);
  }

  getTasks(): void {
    this.dataService.getTasks()
      .subscribe(tasks => this.tasks = tasks)
  }

}
