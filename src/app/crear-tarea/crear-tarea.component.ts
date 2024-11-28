import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.scss'
})
export class CrearTareaComponent {
  
  
  form:FormGroup;

  constructor(private http:HttpClient) {
    this.crearFomulario();
  }

  crearFomulario() {
   this.form = new FormGroup({
    tarea: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(45)
    ]),
    descripcion: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(450)
    ])
   }) 
  }

  crearTarea(){
    /*Obtener los datos del formulario
    * hacer la solicitud POST y enviar los datos del form
    * despues recibir la respuesta (mensaje:'Tarea creada')
    * mostrar mensaje.*/
   if (this.form.valid){
    const tarea= this.form.value; 
    this.http.post('http://localhost/testpv/crear.php' , tarea)
    .subscribe(response=>{
      console.log(response);
      alert('tarea creada');
    }, error=> {
      console.error('error al enviar',error);
    }
  );

    
   } else {
    alert ('por favor complete todos los campos');
   }
  }
}
