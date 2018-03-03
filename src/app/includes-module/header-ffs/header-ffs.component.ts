import { Component, OnInit } from '@angular/core';
import {FfsService} from '../../app.services';

@Component({
  selector: 'header-ffs',
  templateUrl: './header-ffs.component.html',
  styleUrls: ['./header-ffs.component.sass']
})
export class HeaderFfsComponent implements OnInit {
  globalConst;
  constructor(private global: FfsService) {
    this.globalConst = global.ffsGlobal;
  }

  ngOnInit() {
  }

}
