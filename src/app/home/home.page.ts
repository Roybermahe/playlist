import { Component, OnInit } from '@angular/core';
import { cancion } from '../cancion.interface';
import { MusicaService } from '../MusicaService.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaDeCanciones: cancion[] = []; 
  constructor(
    private musicaServicio: MusicaService
  ) {}

  async ngOnInit() {
    (await this.musicaServicio.consultarCanciones()).subscribe(item => {
      this.listaDeCanciones = <cancion[]>item.tracks.track;
    })
  }

  verimagen(imagen: any[]) {
    let data = [];
    let parseData = JSON.parse(JSON.stringify(imagen));
    for (const imagenTexto of parseData) {
      data.push(imagenTexto['#text']);
    }
    return data[0];
  }

}


