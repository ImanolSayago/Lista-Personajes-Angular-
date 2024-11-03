import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Personaje } from '../../tipos/personaje';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

@Input() perso!: Personaje;
@Output() devolverIDeliminarEvent= new EventEmitter<string>();
@Output() devolverIDbuscarEvent= new EventEmitter<string>();

  devIDeliminar()
  {
    this.devolverIDeliminarEvent.emit(this.perso.id);
  }

  devIDbuscar()
  {
    this.devolverIDbuscarEvent.emit(this.perso.id);
  }
}
