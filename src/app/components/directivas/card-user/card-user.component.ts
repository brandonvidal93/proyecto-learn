import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() usuario: any;
  nombre: string;
  correo: string;
  genero: string;
  estado: string;

  constructor() {
    this.nombre = '';
    this.correo = '';
    this.genero = '';
    this.estado = '';
  }

  ngOnInit(): void {
    this.nombre = this.usuario.name;
    this.correo = this.usuario.email;
    this.genero = this.usuario.gender;
    this.estado = this.usuario.status;
  }

}
