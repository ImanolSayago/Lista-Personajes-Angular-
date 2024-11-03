import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../../tipos/personaje';
import { CharacterService } from '../../servicios/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {

  personaje: Personaje={
    name:'',
    alias:'',
    description:''
  }

  servicePersonajes=inject(CharacterService);
  rutas = inject(Router);

  addPersonaje()
  {
    this.servicePersonajes.addPersonaje(this.personaje).subscribe(
      {
        next:()=>
        {
          console.log("Personaje agregado con exito");
          this.rutas.navigate(['characters']);
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

  
    
  
}
