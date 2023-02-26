import { Injectable } from '@angular/core';
import { AppData } from '../models/app-data.model';
import { ScoreDetails } from '../models/score-details.model';

const LAST_NAME = 'lastName';
const TOP_SCORES = 'topScores';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
 
  
  constructor() { }

  get lastName(): string | null {
    return localStorage.getItem(LAST_NAME);
  }

  setLastName(name: string): void {
    localStorage.setItem(LAST_NAME, name);
  }

  
  get topScores(): ScoreDetails[] {
    const topScoreRaw = localStorage.getItem(TOP_SCORES);
    if(!this.isString(topScoreRaw)) return [];
    const scores = this.parseData<ScoreDetails[]>(topScoreRaw);
    return scores? scores : []; 
  }

  setTopScores(scores: ScoreDetails[]): void {
    this.setData(TOP_SCORES, scores);
  }

  private isString(str: string | null): str is string {
    return typeof str === 'string';
  }

  private setData(key: string, data: unknown) {
    let strData = JSON.stringify(data);
    localStorage.setItem(key, strData);
  }
  
  private parseData = <T>(data: string): T | null => {
    try {
      return JSON.parse(data) as T;
    } catch (error) {
      // TODO - add error handling
      console.log(error);
      return null;
    }
  }
} 
