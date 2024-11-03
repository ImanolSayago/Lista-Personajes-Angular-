import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterFormComponent } from "./componentes/character-form/character-form.component";
import { CharacterListComponent } from "./componentes/character-list/character-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterFormComponent, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-personajes-pages';
}
