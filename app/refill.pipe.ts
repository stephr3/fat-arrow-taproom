import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "refill",
  pure: false
})
export class RefillPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredRefillState = args[0];
    if(desiredRefillState === "refill") {
      return input.filter(function(keg){
        return (keg.pints < 10);
      });
    } else {
        return input;
    }
  }
}
