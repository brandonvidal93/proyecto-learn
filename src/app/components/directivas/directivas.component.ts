import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }
}
