import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  title: string = "Actualizar usuario";
  usuario: Usuario[];
  usuarioId: number = this.activatedRoute.snapshot.params["usuarioId"];
  forma:FormGroup;

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute, private usuarioService:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.formulario();
    this.consultarPorId();
  }

  formulario(): void {
    this.forma = this.fb.group({
      usuarioId: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      correo: [null, [Validators.required]]
    });
  }

  volverAusuarios(): void {
    this.router.navigate(['usuarios/']);
  }

  consultarPorId() {
    this.usuarioService.consultarPorId(this.usuarioId).subscribe(
      (usuarios: Usuario[]) => {
        if (usuarios.length > 0) {
          const usuario = usuarios[0]; // Obtiene el primer elemento del arreglo
          // console.log(usuario);

          // Asigna los valores a los controles del formulario
          this.forma.get('usuarioId')?.patchValue(usuario.usuarioId);
          this.forma.get('nombre')?.patchValue(usuario.nombre);
          this.forma.get('apellido')?.patchValue(usuario.apellido);
          this.forma.get('correo')?.patchValue(usuario.correo);

        }
      }
    );
  }

  actualizarUsuario(): void {

    let usuario = new Usuario();

    usuario.usuarioId = this.forma.get('usuarioId')?.value;
    usuario.nombre = this.forma.get('nombre')?.value;
    usuario.apellido = this.forma.get('apellido')?.value;
    usuario.correo = this.forma.get('correo')?.value;
    this.usuarioService.actualizarUsuarios(usuario).subscribe(response => {
    this.forma.reset();

    this.volverAusuarios();
    })
  }




}
