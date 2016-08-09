import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <h2>Edit Keg Details</h2>
    <ul>
      <li><h3> Name: </h3><input [(ngModel)]="keg.name" class="input-lg task-form"></li>
      <li><h3> Brand: </h3><input [(ngModel)]="keg.brand" class="input-lg task-form"></li>
      <li><h3> Style: </h3><input [(ngModel)]="keg.style" class="input-lg task-form"></li>
      <li><h3> Price: </h3><input [(ngModel)]="keg.price" class="input-lg task-form"></li>
      <li><h3> Proof: </h3><input [(ngModel)]="keg.alcohol" class="input-lg task-form"></li>
    </ul>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
