import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>"{{ keg.name }}", Brand: {{ keg.brand }}, Style: {{ keg.style }}, Price: \${{ keg.price }}, Alcohol: {{ keg.alcohol }}%, Pints#: {{ keg.pints }}</h3>
    <button (click)="subtractPint(keg)" class="btn btn-success btn-lg"> - </button>
  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint(subtractKeg: Keg): void {
  subtractKeg.pints = subtractKeg.pints - 1;
  }
}
