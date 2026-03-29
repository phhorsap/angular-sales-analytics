import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dashboard-app-horsap';
}
