import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbpService, nbpRates, nbp } from './nbp.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kalkwalut';
  public nbpData?:nbp;
  kursy = [];
  przelicznik: any[] = [];
  wynik = 0;
  ile:number = 1000;
  val1:any = "USD"
  val2:any = "EUR"
  myTitle(dane:nbpRates){
    return `(${dane.code}) ${dane.currency}`;
  }

  myValue(dane:nbpRates){
    return dane.code;
  }
  licz(){
   let code = `${this.val1}${this.val2}`; 
   let prze = this.przelicznik.filter(e=>e.code == code)[0];
   this.wynik = this.ile * prze.mid;
  }

  ch(th:any){
   // console.log(th);
  }

  constructor(private dane:NbpService){
    dane.obs().subscribe(e=>{
      this.nbpData = e;
      this.kursy = e.rates;
      this.przelicznik = [];
      this.kursy.forEach((el1:nbpRates)=>{
        this.kursy.forEach((el2:nbpRates)=>{
          this.przelicznik.push({code: (`${el1.code}${el2.code}`), mid:(el1.mid/el2.mid)});
          })
        })
      console.log(this.nbpData);
    })
  }
  
}
