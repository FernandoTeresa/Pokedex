import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit{

  public get pokemons():any {
    return this.pokeservice.pokemons;
  }

  public pokemon:any=[]

  public isLoading:boolean = false;
  public apiError:boolean = false;

  private id:any

  constructor(private pokeservice:PokeApiService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((res:any)=>{ 
      this.id = Number (res.params.id)
      this.getPokemon();
      this.isLoading = true;
    });

  }

  getPokemon(){

    this.pokeservice.requestDetails(this.id).subscribe((res:any)=>{
      
      this.pokemon = res

    },error=>{
      if (error){
        this.apiError = true;
      }
    });


  }


}
