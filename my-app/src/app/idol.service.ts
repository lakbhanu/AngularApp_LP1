import { Injectable } from '@angular/core';
import { Idol } from './idol';
import { IDOLS } from './mock-idols';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class IdolService {
  constructor(private messageService: MessageService) { }

  getIdols(): Observable<Idol[]> {
    const idols = of(IDOLS);
    this.messageService.add('IdolService: fetched idols');
    return idols;
  }

  getIdol(id: number): Observable<Idol> {
    const idol = IDOLS.find(i => i.id === id)!;
    this.messageService.add(`HeroService: fetched idol id=${id}`);
    return of(idol);
  }

}
