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
  _obs = new BehaviorSubject<any>(null);
  constructor() {
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
      .then(e=>e.json())
      .then(e=>{ 
        this._obs.next(e)
      })
   }

   obs()
   {
     return this._obs.asObservable();
   } 
}
