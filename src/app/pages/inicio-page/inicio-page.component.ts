import { Component } from '@angular/core';
import { CharacterListComponent } from '../../componentes/character-list/character-list.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
