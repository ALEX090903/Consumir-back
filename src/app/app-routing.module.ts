import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// components
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormUsuarioComponent } from "./components/form-usuario/form-usuario.component";
import { ActualizarUsuarioComponent } from "./components/actualizar-usuario/actualizar-usuario.component";

const routes:Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/crear-usuario', component : FormUsuarioComponent },
  { path: 'usuarios/actualizar-usuario/:usuarioId', component : ActualizarUsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
