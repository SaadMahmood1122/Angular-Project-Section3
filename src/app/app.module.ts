import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MiniTaskComponent } from './task/mini-task/mini-task.component';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { sharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    NewTaskComponent,
    MiniTaskComponent,
  ],
  imports: [BrowserModule, FormsModule, sharedModule],
  providers: [DatePipe], // Correctly provide DatePipe in providers array
  bootstrap: [AppComponent],
})
export class AppModule {}
