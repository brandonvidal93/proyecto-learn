import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getUsuarios(pagina: number): Observable<any> {
    const URL = `https://gorest.co.in/public/v1/users?page=${pagina}`;
    return this.http.get(URL);
  }

  getUsuario(id: string): Observable<any> {
    const URL = `https://gorest.co.in/public/v1/users/${id}`
    return this.http.get(URL);
  }
}
