import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  constructor(private pokeservice:PokeApiService){}

  private get _pokemons():any[]{
    return this.pokeservice.pokemons;
  }

  public pokemons:any[]=[]

  ngOnInit(): void {
    this.pokeservice.requestPokemons().subscribe((res:any)=>{

      for(let i=0; i< res.results.length;i++){
        let array = res.results[i];

        this.pokeservice.requestDetails(array.url).subscribe((res:any)=>{

          this.pokeservice.setPokemons(res);
          this.pokemons.push(res);
          
        })
      }

    });

  }

  search(event:string){
    console.log(event)

    let filter = this._pokemons.filter((res:any)=>{

      return !res.name.indexOf(event.toLowerCase());
    
    })
  
    this.pokemons = filter

  }

}
