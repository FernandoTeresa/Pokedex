import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeservice: PokeApiService) { }

  private _searchStr = "";
  public get searchStr() {
    return this._searchStr;
  }
  public set searchStr(value) {
    this._searchStr = value;
  }

  public existSearch:boolean=false

  public get pokemons(): any[] {
    return this.pokeservice.pokemons
  }


  ngOnInit(): void {

    this.pokeservice.requestPokemons().subscribe((res: any) => {

      for (let i = 0; i < res.results.length; i++) {
        let array = res.results[i];

        this.pokeservice.requestDetails(null, array.url)?.subscribe((res: any) => {

          this.pokeservice.setPokemons(res);
        })
      }

    });

  }

  search(event: string) {
    this.searchStr = event.toLowerCase().trim();

    if(this.searchStr===''){
      this.existSearch = false;
    }else{
      this.existSearch = true;
    }
    
  }

}
