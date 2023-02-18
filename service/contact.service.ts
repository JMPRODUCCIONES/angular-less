import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public user: any;
  constructor() { 
   this.user= {
    namecomplete: '',
    email: '',
    message: '',
   }
  }
}
