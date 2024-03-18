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
  ile = 1000;
  val1 = "USD"
  constructor(private dane:NbpService){
    dane.obs().subscribe(e=>{
      this.nbpData = e;
      console.log(this.nbpData);
    })
  }
  
}
