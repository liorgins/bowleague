import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
