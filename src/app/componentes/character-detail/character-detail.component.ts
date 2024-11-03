import { Component, inject, OnInit } from '@angular/core';
import { Personaje } from '../../tipos/personaje';
import { JsonpClientBackend } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CharacterService } from '../../servicios/character.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit{
  ngOnInit(): void {

    this.rutas.paramMap.pipe(switchMap(params=>{
      return this.servicioPersonaje.getPersonajeByID(params.get('id')??'');
    })).subscribe(character=>{
    this.perso=character;
    })
  }
  perso!:Personaje;
  servicioPersonaje= inject(CharacterService);
  rutas = inject(ActivatedRoute);
  rutitas= inject(Router);

  volverLista()
  {
    this.rutitas.navigate(['characters']);
  }

}
