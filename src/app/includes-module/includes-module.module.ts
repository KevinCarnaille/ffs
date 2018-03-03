import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//
import { HeaderFfsComponent } from './header-ffs/header-ffs.component';
import { FooterFfsComponent } from './footer-ffs/footer-ffs.component';
import {CustomModule} from "../../custom/custom.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomModule
  ],
  exports: [HeaderFfsComponent, FooterFfsComponent],
  declarations: [HeaderFfsComponent, FooterFfsComponent]
})
export class IncludesModuleModule { }
