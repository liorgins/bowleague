import { Injectable } from "@angular/core";
import { BehaviorSubject, iif, Observable } from "rxjs";
import { AppData } from "../models/app-data.model";
import { ScoreDetails } from "../models/score-details.model";
import { LocalstorageService } from "./localstorage.service";


const defaultScores = [
  { name: 'Maeve Bradley', score: 150 },
  { name: 'Princess Mcintyre', score: 100 },
  { name: 'Marissa Cortez', score: 90 },
  { name: 'Mony man', score: 80 },
  { name: 'Armaan Mendoza', score: 70 },
  { name: 'Lior Ginsberg', score: 60 },
  { name: 'Willard Manning', score: 50 },
  { name: 'Tina Woodard', score: 40 },
  { name: 'Issac Kennedy', score: 30 },
  { name: 'Willard Manning', score: 20 },
  { name: 'Francesca Meyers', score: 10 }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private _scores = new BehaviorSubject<ScoreDetails[]>([]);
  scores$: Observable<ScoreDetails[]> = this._scores.asObservable();

  constructor(private localstorageService: LocalstorageService) { }


  init() {
    console.log('initializing data...');
    const topScores = this.localstorageService.topScores;
    if (topScores.length === 0) {
      this.setScoreDetails(defaultScores);
    } else {
      this.setScoreDetails(topScores);
    }
  }

  setScoreDetails(scores: ScoreDetails[]) {
    this._scores.next(scores);
  }

  get scores(): ScoreDetails[] {
    return this._scores.getValue();
  }

  publishScore(score: ScoreDetails) {
    let currentScores = [...this.scores];
    currentScores.push(score);
    currentScores.sort((a, b) => b.score - a.score);
    const topScores = currentScores.slice(0, 10);
    this.setScoreDetails(topScores);
    this.localstorageService.setTopScores(topScores);
  }


}
