import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../tipos/personaje';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

urlbase= 'http://localhost:3000/personajes'
http= inject(HttpClient);

  constructor() { }
  
  getPersonajes():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.urlbase);
  }
  getPersonajeByID(id:string):Observable<Personaje>{
    return this.http.get<Personaje>(`${this.urlbase}/${id}`);
  }

  deletePersonaje(id:string):Observable<Personaje>{
    return this.http.delete<Personaje>(`${this.urlbase}/${id}`);
  }

  addPersonaje(per:Personaje):Observable<Personaje>{
    return this.http.post<Personaje>(this.urlbase,per);
  }
}
