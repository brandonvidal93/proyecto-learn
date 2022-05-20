import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  
  listaUsuarios: any[];

  constructor() {
    this.listaUsuarios = [
      {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
      },
      {
        nombre: 'Pedro',
        apellido: 'Gonzalez',
        edad: 30
      },
      {
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 35
      },
      {
        nombre: 'Carlos',
        apellido: 'Gomez',
        edad: 40
      },
      {
        nombre: 'Ana',
        apellido: 'Martinez',
        edad: 45
      },
      {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
      }
    ];
  }

  ngOnInit(): void {
  }

}
