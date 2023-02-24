import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
