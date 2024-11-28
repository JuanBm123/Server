import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'test',
        pathMatch:'full'
    },
    {
        path:'test', 
        component: TestComponent
    },
    {
        path:'tareas/crear',
        component: CrearTareaComponent
    }
];
