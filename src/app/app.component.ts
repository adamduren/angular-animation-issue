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

const baseStyleRed = {
  backgroundColor: 'red',
};

const baseStyleBlue = {
  backgroundColor: 'blue',
};

export const appAnimations = [
  trigger('boxTransition', [
    state(
      'red',
      style({
      ...baseStyleRed,
      })
    ),

    state(
      'blue',
      style({
        ...baseStyleBlue,
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
