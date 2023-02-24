import { Injectable } from '@angular/core';

const LAST_NAME = 'lastName';

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

  
  // private isString(str: string | null): str is string {
  //   return typeof str === 'string';
  // }

  // private setData(key: string, data: unknown) {
  //   let strData = JSON.stringify(data);
  //   localStorage.setItem(key, strData);
  // }
  // private parseData = <T>(data: string): T | null => {
  //   try {
  //     return JSON.parse(data) as T;
  //   } catch (error) {
  //     // TODO - add error handling
  //     console.log(error);
  //     return null;
  //   }
  // }
} 
