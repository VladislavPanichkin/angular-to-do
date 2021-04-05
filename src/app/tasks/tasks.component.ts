import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { TaskInterface } from '../TaskInterFace';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Array<TaskInterface>;
  selectedTask: Object;

  constructor(public dataService: DataService) {
    this.tasks = [];
    this.selectedTask = {}
   }

  ngOnInit(): void {
    this.tasks = this.dataService.getTasks();
  }
  public selectTask(task: Object): void {
    this.selectedTask = task;
  }

}
