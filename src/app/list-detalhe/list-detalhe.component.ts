import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-detalhe',
  templateUrl: './list-detalhe.component.html',
  styleUrls: ['./list-detalhe.component.css']
})
export class ListDetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  pokeName; detail; loading = undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokeName = params.params.name;
      this.loading = true;
      
      this.apiService.getPokemon(this.pokeName).subscribe((data)=>{
        this.loading = !this.loading;
        this.detail = data;
        console.log(this.detail);
      }) 

    });
  }

}
