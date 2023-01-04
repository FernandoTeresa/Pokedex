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

  public pokemon:any= []

  private id:any

  constructor(private pokeservice:PokeApiService, private activetedRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.getId().then((res)=>{
      if (res){
        this.getPokemons();
      }
    }).catch((err)=>{
      console.log(err);
    });

    console.log(this.pokemon)

  }

  getId(){
    let promise = new Promise((resolve, reject) => {
      this.activetedRoute.paramMap.subscribe((res:any)=>{ 
        this.id = Number (res.params.id)
      });
      resolve(this.id)
    });
    return promise;
  }

  getPokemons(){
    
    this.pokeservice.requestPokemons().subscribe((res:any)=>{
      const results = res.results;
      
      results.map((item:any) => {
        this.pokeservice.requestDetails(item.url).subscribe((res:any)=>{

          if(res.id === this.id){

            this.pokemon.push(res)
            
          }

        });

      });

    });
  }


}
