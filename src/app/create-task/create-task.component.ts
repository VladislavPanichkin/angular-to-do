import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { TaskInterface } from '../TaskInterFace';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: TaskInterface = {id: 4, name: "", description: "", done: false};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createTask(): void {
    console.log(this.task);
    this.dataService.createTask(this.task);
    this.task = {id: 4, name: "", description: "", done: false}
  }

}
