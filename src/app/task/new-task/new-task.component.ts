import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Output() remove = new EventEmitter();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();
  remveform() {
    this.remove.emit(false);
  }

  addTask() {
    //console.log('task add');
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
