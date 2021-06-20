import { Component, OnInit } from '@angular/core';
import { Idol } from '../idol';
import { IDOLS } from '../mock-idols';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
     
  idols = IDOLS;

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedIdol?: Idol;
  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
  }
}
