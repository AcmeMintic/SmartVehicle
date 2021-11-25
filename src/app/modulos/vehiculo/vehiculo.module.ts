import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    GetComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule
  ]
})
export class VehiculoModule { }
