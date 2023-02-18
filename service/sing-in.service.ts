import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Global } from '../models/global';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceNameService {
  public url : string;

  holaMundo(){
    return 'Hola Mundo desde el servicio de Angular'
  }
constructor (private _hhtp: HttpClient){
   this.url = Global.url;
};

  getUser(): Observable<any>{
    return this._hhtp.get(this.url+'/prueba');
  }

}

