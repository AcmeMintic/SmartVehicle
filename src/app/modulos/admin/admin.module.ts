import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './administrador/create/create.component';
import { EditComponent } from './administrador/edit/edit.component';
import { GetComponent } from './administrador/get/get.component';
import * as crearComponent from './cliente/create/create.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent,
    crearComponent.CreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
