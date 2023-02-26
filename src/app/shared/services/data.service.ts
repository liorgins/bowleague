import { Injectable } from "@angular/core";
import { BehaviorSubject, iif, Observable } from "rxjs";
import { AppData } from "../models/app-data.model";
import { ScoreDetails } from "../models/score-details.model";
import { LocalstorageService } from "./localstorage.service";


const defaultScores = [
  { name: 'lior', score: 150 },
  { name: 'lior', score: 100 },
  { name: 'Moshe', score: 90 },
  { name: 'Mony man', score: 80 },
  { name: 'ROPIS', score: 70 },
  { name: 'Levi', score: 60 },
  { name: 'lior', score: 50 },
  { name: 'lior', score: 40 },
  { name: 'lior', score: 30 },
  { name: 'lior', score: 20 },
  { name: 'lior', score: 10 }
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
