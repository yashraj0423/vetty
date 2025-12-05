import { Component, OnInit } from '@angular/core';
import { BoardDataService, Task } from './board-data';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } 
  from '@angular/cdk/drag-drop';
import { TaskModalComponent } from './task-modal/task-modal';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    TaskModalComponent
  ],
  templateUrl: './board.html',
  styleUrls: ['./board.scss']
})
export class BoardComponent implements OnInit {
  tasks: any = {};
  columns: string[] = [];

  constructor(private boardService: BoardDataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.columns = this.boardService.columns;
    this.tasks = this.boardService.getTasks();
  }

  addTask(col: string) {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '350px',
      data: { col }
    });

    dialogRef.afterClosed().subscribe((result: Task | null) => {
      if (result) {
        this.tasks[col].push(result);
        this.boardService.saveTasks(this.tasks);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>, col: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.boardService.saveTasks(this.tasks);
  }
}
