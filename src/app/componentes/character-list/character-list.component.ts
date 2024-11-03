import { Component, inject, OnInit } from '@angular/core';
import { Personaje } from '../../tipos/personaje';
import { Router } from '@angular/router';
import { CharacterService } from '../../servicios/character.service';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{

  ngOnInit(): void {
    this.servicioPersonajes.getPersonajes().subscribe({
      next:(personajeslist)=>
      {
        this.listaPersonajes=personajeslist;
      },
      error:(err:Error)=>
      {
        console.log(err.message);
      }
    })
  }

  listaPersonajes: Array<Personaje>= [];

  rutas= inject(Router);
  servicioPersonajes= inject(CharacterService);

  viajar()
  {
    this.rutas.navigate(['add-personaje']);
  }

  deletePersonaje(id:string)
  {
    this.servicioPersonajes.deletePersonaje(id).subscribe({
      next:()=>
      {
        console.log("Personaje eliminado");
        this.acualizarLista();
      },
      error:(err:Error)=>
      {
        console.log(err.message);
      }
    })
  }

  verInfo(id:string){
    this.rutas.navigate([`info/${id}`]);
  }

  acualizarLista()
  {
    this.servicioPersonajes.getPersonajes().subscribe(
      {
        next:(personajeslist)=>
        {
          this.listaPersonajes=personajeslist;
        }
      }
    )
  }

}
