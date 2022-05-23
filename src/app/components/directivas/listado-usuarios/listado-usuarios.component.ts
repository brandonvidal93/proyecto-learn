import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios: any[];

  constructor(private usuarioService: UsuarioService) {
    this.listaUsuarios = [];
    this.usuarioService.getUsuarios().subscribe(data => {
      this.listaUsuarios = data;
    });
  }

  ngOnInit(): void {
  }

}
