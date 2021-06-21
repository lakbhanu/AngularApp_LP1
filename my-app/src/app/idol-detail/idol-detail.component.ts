import { Component, OnInit ,Input } from '@angular/core';
import { Idol } from '../idol';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IdolService } from '../idol.service';

@Component({
  selector: 'app-idol-detail',
  templateUrl: './idol-detail.component.html',
  styleUrls: ['./idol-detail.component.css']
})
export class IdolDetailComponent implements OnInit {
  @Input() idol?: Idol;

  constructor(
    private route: ActivatedRoute,
    private idolService: IdolService,
    private location: Location) { }

  ngOnInit() {
    this.getIdol();
  }

  getIdol(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idolService.getIdol(id)
      .subscribe(idol => this.idol = idol);
  }

  save(): void {
    if (this.idol) {
      this.idolService.updateIdol(this.idol)
        .subscribe(() => this.goBack());
    }
  }
  
  goBack(): void {
    this.location.back();
  }

}
