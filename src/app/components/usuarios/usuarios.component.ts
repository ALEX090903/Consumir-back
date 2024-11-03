import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioService:UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.consultarUsuarios().subscribe(
      response => {
        this.usuarios = response;
        console.log(this.usuarios)
      }
    );
  }

  crearUsuario():void {
    this.router.navigate(['usuarios/crear-usuario']);
  }

  actualizarUsuarios(usuarioId:number): void {
    this.router.navigate(['usuarios/actualizar-usuario/', usuarioId]);
  }

  eliminarUsuario(usuarioId:number,): void {
    this.usuarioService.eliminarUsuarios(usuarioId).subscribe(
      response => {
        console.log(response);
        this.obtenerUsuarios();
      }
    );
  }

}
