import { Component, OnInit } from '@angular/core';
import { FotoService } from '../fotos.services';
import { Foto } from '../foto';

@Component({
  selector: 'app-lista-foto',
  templateUrl: './lista-foto.component.html'
})

export class ListaFotoComponent implements OnInit {

  constructor(private fotoService: FotoService) { }

  public fotos!: Foto[];
  paginaAtual : number = 1 ;
  contador : number = 24;

  ngOnInit() {
    this.fotoService.obterFotos()
      .subscribe(
        fotos => {
          this.fotos = fotos;
          console.log(fotos);
        },
        error => console.log(error)
      );
  }
}
