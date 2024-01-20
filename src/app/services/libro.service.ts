import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  libro: Task[] = [];

  constructor() {
    this.libro = localStorage.getItem('libro') ? JSON.parse(localStorage.getItem('libro')!) : [];
  }

  getLibro(){
    return this.libro
  }

  saveLibro(libro: Task): void {
    this.libro.push(libro);
    console.log(this.libro)
    localStorage.setItem('libro', JSON.stringify(this.libro));
  }

  searchLibro(codigo: number): Task | null {
    return this.libro.find(libro => libro.ISBN === codigo) || null;
  }

  editLibro(formValue: Task): void {
    const index = this.libro.findIndex(libro => libro.ISBN === formValue.ISBN);

    if (index !== -1) {
      this.libro[index] = formValue;
      localStorage.setItem('libro', JSON.stringify(this.libro));
    }
  }

  deleteLibro(formValue: Task): void {
    const index = this.libro.findIndex(libro => libro.ISBN === formValue.ISBN);

    if (index !== -1) {
      this.libro.splice(index, 1);
      localStorage.setItem('libro', JSON.stringify(this.libro));
    }
  }
}
