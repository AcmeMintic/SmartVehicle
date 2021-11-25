import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },{
    path: "seguridad",
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "solicitud",
    loadChildren: () => import('./modulos/solicitud/solicitud.module').then(m => m.SolicitudModule)
  },
  {
    path: "vehiculo",
    loadChildren: () => import('./modulos/vehiculo/vehiculo.module').then(m => m.VehiculoModule)
  },

  {
    path: 'error',
    component: ErrorComponent,
  },{
    path: '**',
    redirectTo: '/error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


