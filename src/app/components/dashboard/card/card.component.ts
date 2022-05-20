import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() usuario: any;
  @Input() nuevoTexto!: string;
  @Output() nuevoTextoChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarTextoPadre(valor: string): void {
    this.nuevoTextoChange.emit(valor);
  }
}
