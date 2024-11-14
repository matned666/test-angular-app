import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {UserTasksComponent} from './user-tasks/user-tasks.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    TestHeader1Component,
    UserComponent,
    UserTasksComponent]
})
export class AppModule {}
