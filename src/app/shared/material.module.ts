import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule
  ]
})
export class MaterialModule { }
