
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(private http:HttpClient) { }

  public pokemons:any[]=[];

  requestPokemons(){
    return this.http.get(this.url);
  }

  setPokemons(value:any){
      this.pokemons.push(value);
  }

  getPokemons(){
    return this.pokemons;
  }

  requestDetails(url:string){
    return this.http.get(url);
  }

}
