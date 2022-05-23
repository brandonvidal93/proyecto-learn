import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  
  listaUsuarios: any[];

  constructor(private usuarioService: UsuarioService) {
    this.listaUsuarios = [];
    this.usuarioService.getUsuarios().subscribe(data => {
      this.listaUsuarios = data;
    });
  }

  ngOnInit(): void {
  }

  // onChange(evento: string): void {
  //   this.usuarioService.modificarTexto(evento);
  // }
}
