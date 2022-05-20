import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() usuario: any;
  nombre: string;
  apellido: string;
  edad: number;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
  }

  ngOnInit(): void {
    this.nombre = this.usuario.nombre;
    this.apellido = this.usuario.apellido;
    this.edad = this.usuario.edad;
  }

}
