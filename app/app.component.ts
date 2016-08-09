import { Component } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">{{ currentKeg.name }}, Brand: {{ currentKeg.brand }}, Style: {{ currentKeg.style }}, Price: {{ currentKeg.price }}, Alcohol: {{ currentKeg.alcohol }}, Pints: {{ currentKeg.pints }}</h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Fat Arrow => Taproom</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Stabby Lambda", "Ruby", "Saison", 7, 5.5, 0),
      new Keg("Hash Rocket", "Ruby", "IPA", 4, 8, 1),
      new Keg("Mustache Curly Braces", "Angular", "Amber Red", 4, 4, 2),
      new Keg("args!", "Angular", "Stout", 6, 7, 3),
      new Keg("*ngFor", "Angular", "Lager", 3, 3, 4)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public style: string, public price: number, public alcohol: number, public id: number) {

  }
}
