import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() usuario: any;
  id        : string;
  nombre    : string;

  constructor() {
    this.id       = '';
    this.nombre   = '';
  }

  ngOnInit(): void {
    this.id       = this.usuario.id;
    this.nombre   = this.usuario.name;
  }

}
