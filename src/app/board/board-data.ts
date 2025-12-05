import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {
  columns = ['To Do', 'In Progress', 'Need Review', 'Completed'];

  constructor() {
    if (!localStorage.getItem('tasks')) {
      const initial: any = {};
      this.columns.forEach(col => (initial[col] = []));
      localStorage.setItem('tasks', JSON.stringify(initial));
    }
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  saveTasks(data: any) {
    localStorage.setItem('tasks', JSON.stringify(data));
  }
}
