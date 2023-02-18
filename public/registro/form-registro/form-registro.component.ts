import { Component } from '@angular/core';
import { ServiceNameService } from 'src/app/service/sing-in.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.less'],
  providers:[ServiceNameService],
})
export class FormRegistroComponent {



}
 