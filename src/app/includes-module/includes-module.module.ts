import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//
import { HeaderFfsComponent } from './header-ffs/header-ffs.component';
import { FooterFfsComponent } from './footer-ffs/footer-ffs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderFfsComponent, FooterFfsComponent],
  declarations: [HeaderFfsComponent, FooterFfsComponent]
})
export class IncludesModuleModule { }
