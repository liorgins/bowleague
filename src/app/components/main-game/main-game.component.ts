import { Component } from '@angular/core';

interface Score {
  first: number,
  second: number,
  third?: number
}

interface Frame {
  number: number,
  score: Score,
  total: number
}

interface Game {
  name: string,
  frames: Frame[],

}

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent {

  game = {
    frames: [
      {
        number: 1,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 2,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 3,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 4,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 5,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 6,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 7,
        score: {
          first: 2,
          second: 6
        },
        
        total: 8
      },
      {
        number: 8,
        score: {
          first: 2,
          second: 6
        },
        total: 8
      },
      {
        number: 9,
        score: {
          first: 0,
          second: 10
        },
        total: 8
      },
      {
        number: 10,
        score: {
          first: 2,
          second: 6,
          third: 5
        },
        total: 8
      }
    ]
  }

}
