import { Component } from '@angular/core';
import {GamesComponent} from '../games/games.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Marcos'
  isLoggedIn = false
  favGame = ''

  getFavorite(gameName:String){
    // @ts-ignore
    this.favGame = gameName
  }

  greet() {
    alert('Hola!!!')
  }
}
