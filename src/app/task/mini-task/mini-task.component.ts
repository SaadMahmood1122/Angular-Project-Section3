import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mini-task',
  templateUrl: './mini-task.component.html',
  styleUrl: './mini-task.component.css',
})
export class MiniTaskComponent {
  @Input({ required: true }) task?: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  };

  @Output() complete = new EventEmitter<string>();
  onCompletetask() {
    console.log('------');
    this.complete.emit(this.task?.id);
  }
}
