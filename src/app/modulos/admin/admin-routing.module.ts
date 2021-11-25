import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as createAComponent from './administrador/create/create.component';
import * as createAsComponent from './asesor/create/create.component';
import { CreateComponent } from './cliente/create/create.component';
import * as editAComponent from './administrador/edit/edit.component';
import * as editAsComponent from './asesor/edit/edit.component';
import { EditComponent } from './cliente/edit/edit.component';
import * as getAComponent from './administrador/get/get.component';
import * as getAsComponent from './asesor/get/get.component';
import { GetComponent } from './cliente/get/get.component';


const routes: Routes = [
  {
    path: 'create',
    component: createAComponent.CreateComponent,
  },{
    path: 'edit',
    component: editAComponent.EditComponent,
  },{
    path: 'get',
    component: getAComponent.GetComponent,
  },{
    path: '',
    redirectTo: 'get'
  },
  {
    path: 'create',
    component: createAsComponent.CreateComponent,
  },{
    path: 'edit',
    component: editAsComponent.EditComponent,
  },{
    path: 'get',
    component: getAsComponent.GetComponent,
  },{
    path: '',
    redirectTo: 'get'
  },
  {
    path: 'create',
    component: CreateComponent,
  },{
    path: 'edit',
    component: EditComponent,
  },{
    path: 'get',
    component: GetComponent,
  },{
    path: '',
    redirectTo: 'get'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
