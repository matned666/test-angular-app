import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {UserTasksModule} from './user-tasks/user-tasks.module';

@NgModule({
  declarations: [AppComponent, TestHeader1Component, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, UserTasksModule]
})
export class AppModule {
}
