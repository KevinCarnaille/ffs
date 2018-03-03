import { Component } from '@angular/core';
import {routerTransition} from './_animations/route-transition.animation';
// import { routerTransition } from '@angular/animations';

@Component({
  selector: 'app-ffs',
  animations: [ routerTransition ],
  template:
        `
      <header class='container-fluid'>
          <header-ffs></header-ffs>
      </header>

      <main [@routerTransition]='getState(o)' class='container-fluid'>
          <router-outlet #o='outlet'></router-outlet>
      </main>

      <footer class='container-fluid'>
          <footer-ffs></footer-ffs>
      </footer>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }

}
