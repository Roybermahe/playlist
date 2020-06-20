import { Component, OnInit } from '@angular/core';
import { cancion } from '../cancion.interface';
import { ActivatedRoute } from '@angular/router';
import { MusicaService } from '../MusicaService.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  cancion: cancion;
  constructor(
    private route: ActivatedRoute,
    private musicaServicio: MusicaService
  ) { }

  async ngOnInit() {
    let index:number = +this.route.snapshot.paramMap.get('index');
    (await this.musicaServicio.consultarCanciones()).subscribe(item => {
      this.cancion = (<cancion[]>item.tracks.track)[index];
    })
  }

}
