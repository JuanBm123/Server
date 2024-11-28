import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent {
  nombreTarea = '';
  completada = false;
  tareas:any[] = [];

  constructor() {
    this.nombreTarea = 'Realizar exposición';
    this.crearTareas();
  }

  completarTarea() {
    this.completada = !this.completada;
  }

  crearTareas() {
    this.tareas = [];
    for (let index = 0; index < 10; index++) {
      this.tareas.push(
        {
          id:index,
          nombre:'Tarea '+index
        }
      );
    }
  }

  eliminarTarea(tarea:any) {
    console.log('Eliminar Tarea: ',tarea)
    this.tareas = this.tareas.filter(f => f.id !== tarea.id);
  }

}