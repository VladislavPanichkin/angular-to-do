import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "create-task", component: CreateTaskComponent},
  {path: "tasks", component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
