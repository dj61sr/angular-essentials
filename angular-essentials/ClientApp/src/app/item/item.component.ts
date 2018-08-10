import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;

  swService: StarWarsService;

  constructor(swSerivce: StarWarsService) {
    this.swService = swSerivce;
  }

  ngOnInit() {
  }

  onAssign(side) {
    //this.character.side = side;
    //this.sideAssigned.emit({ name: this.character.name, side: this.character.side });

    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
