import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component'
import { Keg } from './keg.model';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { RefillPipe } from './refill.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [RefillPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Kegs</option>
    <option value="refill">Show Near Empty Kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | refill:filterRefill"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <hr>
  <edit-keg-details *ngIf="selectedKeg"[keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterRefill: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(params: string[]): void {
    this.kegList.push(
      new Keg(params[0], params[1], params[2], parseFloat(params[3]), parseFloat(params[4]), this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterRefill = filterOption;
    console.log(this.filterRefill);
  }
}
