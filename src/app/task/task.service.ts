import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getTasks() {
    return this.dummyTasks;
  }

  addTask(task: { title: string; summary: string; date: string }, id: string) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: id,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });
  }

  removeTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }
}
