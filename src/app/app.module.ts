import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { FooterComponent } from './assets/footer/footer.component';
import { IndexComponent } from './assets/index/index.component';
import { ErrorComponent } from './assets/error/error.component';
import { CreateComponent } from './modulos/solicitud/create/create.component';
import { GetComponent } from './modulos/solicitud/get/get.component';
import { EditComponent } from './modulos/solicitud/edit/edit.component';
import { HomeComponent } from './assets/home/home.component';
import { ContactoComponent } from './assets/contacto/contacto.component';
import { SolicitudComponent } from './assets/solicitud/solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    CreateComponent,
    GetComponent,
    EditComponent,
    HomeComponent,
    ContactoComponent,
    SolicitudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
