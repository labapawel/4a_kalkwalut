import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './inputs/inputs.component';
import { NowyComponent } from './nowy/nowy.component';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, NowyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  constructor (private test:TestService){

  }
}

