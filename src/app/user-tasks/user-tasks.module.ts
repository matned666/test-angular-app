import {NgModule} from '@angular/core';
import {UserTaskComponent} from './user-task/user-task.component';
import {UserTasksComponent} from './user-tasks.component';
import {AddNewUserTaskComponent} from './add-new-user-task/add-new-user-task.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations:[UserTasksComponent, UserTaskComponent, AddNewUserTaskComponent],
  exports:[UserTasksComponent],
  imports: [SharedModule, FormsModule, DatePipe]
})
export  class UserTasksModule{}
