import { Component } from '@angular/core';

import {
  animate,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const appAnimations = [
  trigger('boxTransition', [
    state(
      'red',
      style({
        backgroundColor: 'red'
      }),
    ),

    state(
      'blue',
      style({
        backgroundColor: 'blue'
      }),
    ),

    transition('blue <=> red', [animate('250ms ease-out')]),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [appAnimations],
})
export class AppComponent {
  public boxColor = 'red';

  public toggleMapMode() {
    this.boxColor = this.boxColor === 'red' ? 'blue' : 'red';
  }
}
