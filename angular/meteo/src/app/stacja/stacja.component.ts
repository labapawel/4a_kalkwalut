import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-stacja',
  standalone: true,
  imports: [],
  templateUrl: './stacja.component.html',
  styleUrl: './stacja.component.scss'
})
export class StacjaComponent {
  _dane: any;
  @Input({ required: true }) 
  set dane(val:any){
    this._dane = val; 
  }

}
