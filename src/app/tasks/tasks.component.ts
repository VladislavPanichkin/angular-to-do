import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';
import { filter, map } from 'rxjs/operators';

import { TaskInterface } from '../TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Observable<any> = of([]);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTasks().subscribe((tasks) => {this.tasks = tasks});
  }

  selectTask(task: any): void {
    const modifiedTask = {...task, done: !task.done}
    this.dataService.toggleTask(modifiedTask, modifiedTask.id).subscribe();
    this.tasks = this.tasks.pipe(map(el => {
      if (el.id === modifiedTask) {
        return modifiedTask
      }
      return el
    }));
  }

  deleteTask(task: number): void {
    this.dataService
      .deleteTask(task)
      .subscribe();
    this.tasks = this.tasks.pipe(filter(el => el.id !== task));
  }
}
