import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StacjaComponent } from './stacja/stacja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, StacjaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meteo';
  miasto = "";
  daneImgw : any[]=[];
  
  constructor (){
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
      .then(e=>e.json())
      .then(e=>{
        console.log(e);   
      })
    fetch('https://danepubliczne.imgw.pl/api/data/synop/')
      .then(e=>e.json())
      .then(e=>{
         // console.log(e);
          this.daneImgw = e;
      })
  }
  
  daneZImgw()
  {
   
    if(this.miasto != "")
      return this.daneImgw.filter(
          e=>e.stacja.toUpperCase()
          .includes(this.miasto.toUpperCase())
          )
    return this.daneImgw;
  }
}





