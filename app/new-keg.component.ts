import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <h3>Add a New Keg:</h3>
    <input placeholder="Name" class="col-sm-6 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-6 input-lg" #newBrand>
    <input placeholder="Style" class="col-sm-6 input-lg" #newStyle>
    <input placeholder="Price" class="col-sm-6 input-lg" #newPrice>
    <input placeholder="Proof" class="col-sm-6 input-lg" #newProof>
    <button (click)="addKeg(newName, newBrand, newStyle, newPrice, newProof)" class="btn btn-success btn-lg">Add</button>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userStyle: HTMLInputElement, userPrice: HTMLInputElement, userProof: HTMLInputElement){
    var params: String[] = [userName.value, userBrand.value, userStyle.value, userPrice.value, userProof.value];
    this.onSubmitNewKeg.emit(params);
    userName.value = "";
    userBrand.value = "";
    userStyle.value = "";
    userPrice.value = "";
    userProof.value = "";
  }
}
