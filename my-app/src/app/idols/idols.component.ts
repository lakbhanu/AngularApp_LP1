import { Component, OnInit } from '@angular/core';
import { Idol } from '../idol';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {
     
  idol: Idol = {
    id: 1,
    name: 'Chris Hadfield'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
