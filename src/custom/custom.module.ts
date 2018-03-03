import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ImageDirPipe} from './pipes/image-dir.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [ImageDirPipe],
    imports: [
        CommonModule,
        BrowserModule,
    ],
    exports: [ImageDirPipe]
})

export class CustomModule {
}
