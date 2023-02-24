import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewGameDialogResult } from 'src/app/shared/models/new-game-dialog-data.model';
import { ScoreDetails } from 'src/app/shared/models/score-details.model';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NewGameDialogComponent } from '../new-game-dialog/new-game-dialog.component';



@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {



  mockRows: Observable<ScoreDetails[]> = of([
    {name: 'lior', score: 123},
    {name: 'Moshe', score: 23},
    {name: 'Mony man', score: 4},
    {name: 'ROPIS', score: 123},
    {name: 'Levi', score: 123},
    {name: 'lior', score: 42},
    {name: 'lior', score: 25}
  ]);


  constructor(private dialog: MatDialog,
     private storageService: LocalstorageService,
     private router: Router) {}
  

  ngOnInit() {
  }

  startNewGame() {
    const lastName = this.storageService.lastName;

    const dialogRef = this.dialog.open(
      NewGameDialogComponent,{
        width: '250px',
      data: {lastName: lastName}
    });

    dialogRef.afterClosed().subscribe((result: NewGameDialogResult) => {
      if(result.rememberMe) {
        this.storageService.setLastName(result.name);
      }
      this.router.navigate(['game'], {queryParams: {name: result.name}});
    });
  }

}
