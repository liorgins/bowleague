import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.init();
  }

  // load from local storage on 
}
