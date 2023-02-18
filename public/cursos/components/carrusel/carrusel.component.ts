import { Component } from '@angular/core';
import { cursos } from '../../../../models/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.less']
})
export class CarruselComponent {
[x: string]: any;

  news:cursos[] = [];

  new!:cursos[];

  p:any;

  constructor(private _servicio:CursosService){
    this.news = this._servicio.getAll();
    this.p = 1;
  }

}
