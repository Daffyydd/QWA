import { Injectable } from '@angular/core';
import { HEROES } from '../database/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
} 