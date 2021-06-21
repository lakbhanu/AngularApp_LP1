import { Injectable } from '@angular/core';
import { Idol } from './idol';
import { IDOLS } from './mock-idols';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class IdolService {
  getIdols(): Observable<Idol[]> {
    const idols = of(IDOLS);
    this.messageService.add('IdolService: fetched idols');
    return idols;
  }
  constructor(private messageService: MessageService) { }
}
