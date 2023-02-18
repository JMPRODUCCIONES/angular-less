import { Injectable } from '@angular/core';
import { cursos } from '../models/cursos';
import { sample_cursos } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getAll():cursos[]{
    return sample_cursos;
  }

  getNewById(elementId:string){
    return this.getAll().find(i => i.id == elementId) ?? new cursos();
  }

}
