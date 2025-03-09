import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input() name!: string;
  @Input() userId!: string;
  isTaskAdded = false;

  tasks: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }[] = [];

  // Dependency injection for TaskService
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Initialize tasks by fetching them from the TaskService
    this.tasks = this.taskService.getTasks();
  }

  onCompleteTask(id: string): void {
    console.log('Output received: ' + id);
    this.taskService.removeTask(id); // Call service method to remove task
    this.tasks = this.taskService.getTasks(); // Re-fetch tasks after removal
  }

  onAddTask(): void {
    this.isTaskAdded = true;
  }

  onCancelTask(isRemove: boolean): void {
    this.isTaskAdded = isRemove;
  }

  onTaskAdded(newTask: { title: string; summary: string; date: string }): void {
    this.isTaskAdded = false; // Hide the form after adding the task
    this.taskService.addTask(newTask, this.userId); // Add the task via the service
    this.tasks = this.taskService.getTasks(); // Re-fetch tasks after adding
  }
}
