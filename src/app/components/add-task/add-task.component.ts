import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;

  onSubmit() {
    //SIMPLE FORM VALIDATION
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    //NEW TASK OBJECT - DATA BINDING WITH FORM FIELDS
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //EMIT EVENT WITH NEW TASK OBJECT
    this.onAddTask.emit(newTask);

    //CLEAR FORM FIELDS
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
