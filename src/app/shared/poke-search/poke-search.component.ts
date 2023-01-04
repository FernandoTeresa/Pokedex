import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  @Output() public eventEmiter:EventEmitter<string> = new EventEmitter();

  constructor(){}

  search(value:string){
    this.eventEmiter.emit(value);
  }

}
