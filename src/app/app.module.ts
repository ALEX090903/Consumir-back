import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { AppRoutingModule } from './app-routing.module';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    ActualizarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
