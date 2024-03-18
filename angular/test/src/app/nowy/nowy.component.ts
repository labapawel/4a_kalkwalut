import { NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy, Output } from '@angular/core';


@Component({
  selector: 'app-nowy',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nowy.component.html',
  styleUrl: './nowy.component.scss'
})
export class NowyComponent implements  OnDestroy {
    zmienna = "test";
    @Output()
    public daneImgw: any[]=[];
    constructor(){
     this.zmienna = "test123";
     fetch('https://danepubliczne.imgw.pl/api/data/synop/')
       .then(e=>e.json())
       .then(dane => {
        this.daneImgw=dane
        console.log(this.daneImgw)
      });
    } 

    ngOnDestroy(){
      
    }

  
}
