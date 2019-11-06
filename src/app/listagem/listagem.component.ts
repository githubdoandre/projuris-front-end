import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

@Injectable()
export class ListagemComponent implements OnInit {

  constructor(private apiService: ApiService, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  pokemons = [];
  previous; next; loading = undefined; 
  page = 1; 

  STORAGE_KEY = 'pokefav';

  ngOnInit() {
    this.getApi('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  }

  getApi(api){  
    this.loading = true;
    this.apiService.getPokemons(api).subscribe((data:any)=>{
      this.loading = !this.loading;
      this.pokemons = data.results;
      this.previous = data.previous;
      this.next = data.next;
    }) 
  }

  nextPage(){
    this.getApi(this.next);
    this.page++;
  }

  previousPage(){
    this.getApi(this.previous);
    this.page--;
  }

  addFav(pokeName){
     this.storage.set(this.STORAGE_KEY, pokeName);
  }

  isFav(pokeName){
    const currentFav = this.storage.get(this.STORAGE_KEY) || '';
    return (pokeName === currentFav);
  }

}
