import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}, Brand: {{ keg.brand }}, Style: {{ keg.style }}, Price: {{ keg.price }}, Alcohol: {{ keg.alcohol }}, Pints: {{ keg.pints }}</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
