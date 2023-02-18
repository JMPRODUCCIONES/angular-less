import { Component, Input } from '@angular/core';
import { tips } from 'src/app/models/tips';
import { TipsService } from 'src/app/service/tips.service';
@Component({
  selector: 'app-list-tips',
  templateUrl: './list-tips.component.html',
  styleUrls: ['./list-tips.component.less']
})
export class ListTipsComponent {
tip:tips[] = [];

tips!:tips[];
constructor(private _service:TipsService){
  this.tips = this._service.getAll();

}

ngOnInit(){}

}
