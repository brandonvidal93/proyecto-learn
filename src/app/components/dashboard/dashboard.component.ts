import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string;
  urlImagen: string;
  textoEjemplo: string;
  isDisabled: boolean;
  texto: string;
  texto2: string;
  
  constructor() {
    this.nombre = 'Brandon';
    this.urlImagen = 'https://images.unsplash.com/photo-1514428631868-a400b561ff44?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170';
    this.textoEjemplo = 'Escribe algo';
    this.isDisabled = false;
    this.texto = 'Texto pasado al componente hijo';
    this.texto2 = 'Texto desde componente padre';
  }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(_nombre: string): void {
    this.nombre = _nombre;
  }

  cambiarNombre(): void {
    this.setNombre('Stiven');
  }

  deshabilitarInput(): void {
    this.isDisabled = !this.isDisabled;
  }

  

}
