import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface nbpRates{
  currency: string;
  code: string;
  mid: number
}
export interface nbp {
  tabela:string;
  no: string;
  effectiveDate: Date
  rates:nbpRates[]
}


@Injectable({
  providedIn: 'root'
})

export class NbpService {
  public dane?:nbp;
  _obs = new BehaviorSubject<any>({rates:[]});
  constructor() {
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
      .then(e=>e.json())
      .then(e=>{ 
        //console.log(e[0]);
        e[0].rates.push({currency:"Polski złoty",code:"PLN", mid:1} );
        this._obs.next(e[0])
      })
   }

   obs()
   {
     return this._obs.asObservable();
   } 
}
