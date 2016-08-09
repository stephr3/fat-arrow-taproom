import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Fat Arrow => Taproom</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Stabby Lambda", "Ruby", "Saison", 7, 5.5, 0),
      new Keg("Hash Rocket", "Ruby", "IPA", 4, 8, 1),
      new Keg("Mustache Curly Braces", "Angular", "Amber Red", 7, 4, 2),
      new Keg("args!", "Angular", "Stout", 6, 7, 3),
      new Keg("*ngFor", "Angular", "Lager", 3, 3, 4),
      new Keg("Pear-Commit", "NPM Install", "Cider", 6, 5.3, 5),
      new Keg("EventEmitter", "Uglify Brewing", "Malt Liquor", 2, 9, 6),
      new Keg("Nocturnal Emissions", "Uglify Brewing", "Sake", 15, 2, 7),
      new Keg("99 Berries", "Uglify Brewing", "Blueberry Vodka Infused Beer", 3, 7.5, 8)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
