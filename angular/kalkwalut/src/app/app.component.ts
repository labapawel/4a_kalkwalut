import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbpService } from './nbp.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kalkwalut';
  constructor(private dane:NbpService){
    console.log(dane.dane);
  }
  
}
