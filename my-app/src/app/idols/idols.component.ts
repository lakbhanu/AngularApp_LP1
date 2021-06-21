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
} 
