import { Pipe, PipeTransform } from '@angular/core';
import {FfsService} from '../../app/app.services';

@Pipe({ name: 'imageDir' })
export class ImageDirPipe implements PipeTransform {
    globalConst;
    constructor(private global: FfsService) {
        this.globalConst = global.ffsGlobal;
    }

    transform(input: string): string {
        return this.globalConst.imgDir + input;
    }
}