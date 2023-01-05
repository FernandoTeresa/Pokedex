import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit{

  constructor(private pokeservice: PokeApiService){}

  public get allpokemons():any[]{
    return this.pokeservice.allNamesPokemons;
  }

  ngOnInit(){

    this.pokeservice.requestAllPokemons().subscribe((res: any) => {
        this.pokeservice.setAllPokemons(res.results)
    })
  }



}
