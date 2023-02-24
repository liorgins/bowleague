import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {


  game!: Game;

  constructor() { }

  startGame() {
    this.game = new Game():
  }



  // publish result (should update leaderboard)
  endGame() {
    cu
  }
}
