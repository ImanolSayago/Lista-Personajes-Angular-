import { Routes } from '@angular/router';
import { CharacterListComponent } from './componentes/character-list/character-list.component';
import { CharacterFormComponent } from './componentes/character-form/character-form.component';
import { CharacterDetailComponent } from './componentes/character-detail/character-detail.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

export const routes: Routes = [
    {path:'characters',component:InicioPageComponent},
    {path:'add-personaje',component:CharacterFormComponent},
    {path:'info/:id', component:CharacterDetailComponent}
];
