import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'http://localhost:8080/crud';

  constructor(private http:HttpClient) { }

  // crear usuarios
  crearUsuario(usuario:Usuario):Observable<Object> {
    return this.http.post<Usuario>(`${this.url}/crear-usuarios`, usuario);
  }

  // consultar usuarios
  consultarUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/consultar-usuarios`);
  }

  // consultar usuario por id
  consultarPorId(usuarioId:number):Observable<Usuario[]> {
    const options = { params: { usuarioId: usuarioId.toString() } };
    return this.http.get<Usuario[]>(`${this.url}/consultar-por-id`, options);
  }

  // actualizar usuarios
  actualizarUsuarios(usuario:Usuario):Observable<Object> {
    // const options = { params: { usuarioId: usuarioId.toString() } };
    return this.http.put(`${this.url}/actualizar-usuarios`, usuario);
  }

  // eliminar usuarios
  eliminarUsuarios(usuarioId:number):Observable<Object> {
    const options = { params: { usuarioId: usuarioId.toString() } };
    return this.http.delete(`${this.url}/eliminar-usuario`, options);
  }

  inactivarUsuario(usuarioId:number):Observable<Object> {
    const options = { params: { usuarioId: usuarioId.toString() } };
    return this.http.post(`${this.url}/inactivar-usuario`, options);
  }

}
