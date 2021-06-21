import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Idol } from './idol';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const idols = [
      { id: 1, name: 'Taylor Swift' },
      { id: 2, name: 'Beyonce' },
      { id: 3, name: 'Backstreet Boys' },
      { id: 4, name: 'Kalpana Chawla' },
      { id: 5, name: 'Serena Williams' },
      { id: 6, name: 'Stan Lee' },
      { id: 7, name: 'Will Smith' },
      { id: 8, name: 'J.K Rowling' },
      { id: 9, name: 'Chris Hadfield' },
      { id: 10, name:'Stephan King' }
    ];
    return {idols};
  }


  genId(idols:Idol[]): number {
    return idols.length > 0 ? Math.max(...idols.map(idol => idol.id)) + 1 : 11;
  }
}