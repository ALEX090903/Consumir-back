import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "src/app/modelo/usuario";
import { UsuariosService } from "src/app/services/usuarios.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector : 'app-form-usuario',
  templateUrl : './form-usuario.component.html',
  styleUrls : ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {

  title: string = "crear usuario";
  forma: FormGroup;

  constructor( private fb:FormBuilder, private usuarioService:UsuariosService, private router:Router ) {}

  ngOnInit(): void {
    this.formulario();
    // this.crearUsuario();
  }

  formulario(): void {
    this.forma = this.fb.group({
      usuarioId: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      correo: [null, [Validators.required]]
    });
  }

  get nombre() {
    return this.forma.get('nombre');
  }

  get apellido() {
    return this.forma.get('apellido');
  }

  get correo() {
    return this.forma.get('correo');
  }

  crearUsuario(): void {
    // console.log(this.forma.value)
    let usuario = new Usuario();

    usuario.usuarioId = this.forma.get('usuarioId')?.value;
    usuario.nombre = this.forma.get('nombre')?.value;
    usuario.apellido = this.forma.get('apellido')?.value;
    usuario.correo = this.forma.get('correo')?.value;
    this.usuarioService.crearUsuario(usuario).subscribe(response => {
    // this.usuarioService.crearUsuario(this.forma.value).subscribe(response => {
    this.forma.reset();
      // console.log(response);
    this.volverAusuarios();
    })
  }

  volverAusuarios(): void {
    this.router.navigate(['usuarios/']);
  }

}
