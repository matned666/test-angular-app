import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {UserTasksComponent} from './user-tasks/user-tasks.component';
import {UserTaskComponent} from './user-tasks/user-task/user-task.component';
import {AddNewUserTaskComponent} from './user-tasks/add-new-user-task/add-new-user-task.component';
import {CardComponent} from './shared/card/card.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestHeader1Component,
    UserComponent,
    UserTasksComponent,
    UserTaskComponent,
    AddNewUserTaskComponent,
    CardComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule]
})
export class AppModule {
}
