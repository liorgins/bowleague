import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Game from 'src/app/shared/models/game';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {

  @ViewChild('board', {static: true, read: ElementRef}) board!: ElementRef;

  game!: Game;

  selectedRole = 0;

  constructor(private activedRoute: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit() {
    this.activedRoute.queryParams
      .subscribe(params => {
        this.game = new Game(params['name']);
        this.game.frameSubject$.subscribe(frame => {
          console.log("?")
          this.board.nativeElement.scrollBy(100,0)
        });
      });

  }

  get availableOptions() {
    const availablePins = this.game.availablePins;
    return Array.from(Array(availablePins).keys())
  }


  roleSubmit() {
    this.game.setRole(this.selectedRole);
    this.selectedRole = 0;
    if(this.game.state === 'over') {
      
      this.dataService.publishScore({name: this.game.name, score: this.game.total});
    }
  }

  restartGame() {
    this.game = new Game(this.game.name);
    this.game.frameSubject$.subscribe(frame => {
      this.board.nativeElement.scrollBy(100,0)
    });
    this.board.nativeElement.scrollTo(-1000,0)

  }



}
