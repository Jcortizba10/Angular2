import { Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LibroComponent } from './components/libro/libro.component';

export const routes: Routes = [
  {
    path:'',
    component: AdministradorComponent
  },
  {
    path:'libreria',
    component: LibroComponent
  }
];
