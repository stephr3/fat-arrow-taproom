import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <input [(ngModel)]="keg.name" class="col-sm-6 input-lg">
    <input [(ngModel)]="keg.brand" class="col-sm-6 input-lg">
    <input [(ngModel)]="keg.style" class="col-sm-6 input-lg">
    <input [(ngModel)]="keg.price" class="col-sm-6 input-lg">
    <input [(ngModel)]="keg.alcohol" class="col-sm-6 input-lg">
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
