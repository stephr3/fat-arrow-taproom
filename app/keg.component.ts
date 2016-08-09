import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <row>
      <div class="col-md-1"><button (click)="subtractPint(keg)" class="btn btn-lg"> - </button></div>
      <h3 class="col-md-11">"{{ keg.name }}", Brand: {{ keg.brand }}, Style: {{ keg.style }}, Price: \${{ keg.price }}, Alcohol: {{ keg.alcohol }}%, Pints#: {{ keg.pints }}</h3>
    </row>
  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint(subtractKeg: Keg): void {
  subtractKeg.pints = subtractKeg.pints - 1;
  }
}
