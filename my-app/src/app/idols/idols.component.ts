import { Component, OnInit } from '@angular/core';
import { Idol } from '../idol';
import { IdolService } from '../idol.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})

export class IdolsComponent implements OnInit {

  idols: Idol[] = [];

  constructor(private idolService: IdolService) { }

  ngOnInit() {
    this.getIdols();
  }
  

  getIdols(): void {
    this.idolService.getIdols()
      .subscribe(idols => this.idols = idols);

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.idolService.addIdol({ name } as Idol)
      .subscribe(idol => {
        this.idols.push(idol);
      });
  }

} 
