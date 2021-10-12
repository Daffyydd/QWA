import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes =[];
    return {heroes};
  }
  constructor() { }
 // genId(heroes: Hero[]): number {
  //  return heroes.length > 0 ? Math.max(...heroes.map(hero => //hero.id)) + 1 : 11;
 // }
}