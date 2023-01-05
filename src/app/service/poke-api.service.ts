
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  private allPokemons: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'

  constructor(private http: HttpClient) { }

  public pokemons: any[] = [];

  public allNamesPokemons: any[] = [];

  requestPokemons() {

    return this.http.get(this.url);
  }

  setPokemons(value: any) {
    this.pokemons.push(value);
  }

  requestDetails(id: any = null, urlApi: string = '') {

    let url = '';

    if (id) {
      url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
    }

    if (urlApi != '') {
      url = urlApi
    }

    return this.http.get(url);
  }

  requestAllPokemons() {
    return this.http.get(this.allPokemons);
  }

  setAllPokemons(value: any[]) {
    this.allNamesPokemons=value;
  }

}
