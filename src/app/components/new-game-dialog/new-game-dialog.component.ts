import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewGameDialogData } from 'src/app/shared/models/new-game-dialog-data.model';

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent implements OnInit {

  newGameForm!: FormGroup;

  @ViewChild('name', { static: true, read: ElementRef }) name!: ElementRef;
  @ViewChild('rememberMe', { static: true, read: ElementRef }) rememberMe!: ElementRef;


  constructor(
    public dialogRef: MatDialogRef<NewGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewGameDialogData,

  ) { }


  ngOnInit(): void {
    this.newGameForm = new FormGroup({
      name: new FormControl(),
      rememberMe: new FormControl(false),
    });
  }


  play(): void {
    console.log(this.newGameForm.value)
    this.dialogRef.close(this.newGameForm.value);
  }

  continueClicked() {
    this.dialogRef.close({ name: this.data.lastName, rememberMe: false });

  }
}
