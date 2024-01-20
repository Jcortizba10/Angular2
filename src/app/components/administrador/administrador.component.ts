import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from "../libro/libro.component";
import { CommonModule } from '@angular/common';
import { LibroService } from '../../services/libro.service';

@Component({
    selector: 'app-administrador',
    standalone: true,
    templateUrl: './administrador.component.html',
    styleUrl: './administrador.component.css',
    imports: [FormsModule, LibroComponent, CommonModule]
})
export class AdministradorComponent implements OnInit {
  constructor(private libroService: LibroService) {}


  libro: Task|undefined;

  ngOnInit(): void {
/*
    this.todoList = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')!) : []
*/
  }

  onSubmit(formValue: Task){
    this.libroService.saveLibro(formValue);
    console.log(formValue);

  /* onSubmit(formValue: Task){
      this.todoList.push(formValue);
      localStorage.setItem('tasks', JSON.stringify(this.todoList))
      console.log(formValue);
    }*/
    /*onRemove(index: number) {
      this.todoList.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.todoList)); // Actualizar el almacenamiento local después de la eliminación
    }*/
}
}
