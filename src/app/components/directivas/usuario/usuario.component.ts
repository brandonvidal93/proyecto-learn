import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id        : string;
  nombre    : string;
  correo    : string;
  genero    : string;
  estado    : string;
  isLoad    : boolean;

  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService ) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
    this.nombre   = '';
    this.correo   = '';
    this.genero   = '';
    this.estado   = '';
    this.isLoad   = true;
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.isLoad = false;
      this.nombre = data.data.name;
      this.correo = data.data.email;
      this.genero = data.data.gender;
      this.estado = data.data.status;
    });
  }

  ngOnInit(): void {
  }

}
