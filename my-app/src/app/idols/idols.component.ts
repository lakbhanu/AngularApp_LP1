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
  selectedIdol?: Idol;

  idols: Idol[] = [];

  constructor(private idolService: IdolService, 
     private messageService: MessageService) { }

  ngOnInit() {
    this.getIdols();
  }
  
  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
    this.messageService.add(`HeroesComponent: Selected idol id=${idol.id}`);
  }

  getIdols(): void {
    this.idolService.getIdols()
      .subscribe(idols => this.idols = idols);

  }
} 
