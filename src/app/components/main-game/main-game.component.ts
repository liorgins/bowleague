import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Game from 'src/app/shared/models/game';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {

  game!: Game;

  selectedRole!: number;

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.queryParams
      .subscribe(params => {this.game = new Game(params['name'])});
  }

  get availableOptions() {
    const availablePins = this.game.availablePins;
    return Array.from(Array(availablePins).keys())
  }


  roleSubmit() {
    this.game.setRole(this.selectedRole);
  }



}
