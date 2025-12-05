import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './task-modal.html',
  styleUrls: ['./task-modal.scss']
})
export class TaskModalComponent {
  id = '';
  title = '';
  desc = '';

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    if (!this.id || !this.title) return;

    this.dialogRef.close({
      id: this.id,
      title: this.title,
      desc: this.desc
    });
  }
}
