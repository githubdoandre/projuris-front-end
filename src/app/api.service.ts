import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  public getPokemons(api){
    return this.httpClient.get(api);
  }

  public getPokemon(name){
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
