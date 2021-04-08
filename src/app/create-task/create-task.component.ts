import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { DataService } from '../data.service';
import { TaskInterface } from '../TaskInterface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;

  loading: boolean = false;
  success: boolean = false;

  constructor(public dataService: DataService, public fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      done: false
    })

    this.form.valueChanges.subscribe(console.log);
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get done() {
    return this.form.get('done');
  }

  ngOnInit() { }

  createTask(): void {
    this.loading = true;

    const formValue = this.form.value;

    try {      
      this.dataService.createTask(formValue);
      this.success = true;
    } catch(err) {
      console.error(err);
    } finally {
      this.loading = false
    }
    // let formData: any = new FormData();
    // formData.append("name", this.form.get('name').value);
    // formData.append("description", this.form.get('description').value);
    // formData.append("done", this.form.get('done').value);

    // this.dataService.createTask(formData);
  }
}
