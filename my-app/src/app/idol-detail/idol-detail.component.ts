import { Component, OnInit ,Input } from '@angular/core';
import { Idol } from '../idol';

@Component({
  selector: 'app-idol-detail',
  templateUrl: './idol-detail.component.html',
  styleUrls: ['./idol-detail.component.css']
})
export class IdolDetailComponent implements OnInit {
  @Input() idol?: Idol;

  constructor() { }

  ngOnInit() {
  }

}
