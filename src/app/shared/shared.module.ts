import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ComponentComponent } from './component/component.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ComponentComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
