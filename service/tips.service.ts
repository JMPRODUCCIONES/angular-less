import { Injectable } from '@angular/core';
import { tips } from '../models/tips';
import { sample_tips } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor() { }

  getAll(): tips[]{
    return sample_tips;
  }

  getNewById(elementId:string){
    return this.getAll().find(i => i.id == elementId) ??new tips();
  }
}
