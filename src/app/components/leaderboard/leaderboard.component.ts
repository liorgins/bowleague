import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewGameDialogResult } from 'src/app/shared/models/new-game-dialog-data.model';
import { ScoreDetails } from 'src/app/shared/models/score-details.model';
import { DataService } from 'src/app/shared/services/data.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NewGameDialogComponent } from '../new-game-dialog/new-game-dialog.component';



@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  scores$!: Observable<ScoreDetails[]>;
  
  constructor(private dialog: MatDialog,
     private storageService: LocalstorageService,
     private dataService: DataService,
     private router: Router) {}
  

  ngOnInit() {
    this.scores$ = this.dataService.scores$;
  }

  startNewGame() {
    let lastName = this.storageService.lastName;
    if(lastName === null) {
      lastName = 'Anonymous';
    }

    const dialogRef = this.dialog.open(
      NewGameDialogComponent,{
        width: '250px',
      data: {lastName: lastName}
    });

    dialogRef.afterClosed().subscribe((result: NewGameDialogResult) => {
      const name = result.name? result.name : 'Anonymous';
      if(result.rememberMe) {
        this.storageService.setLastName(name);
      }
      this.router.navigate(['game'], {queryParams: {name}});
    });
  }

}
