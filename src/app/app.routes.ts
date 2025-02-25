import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TalleresComponent } from './talleres/talleres.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: '**', redirectTo: '' } // Redirige a inicio si la ruta no existe
];

