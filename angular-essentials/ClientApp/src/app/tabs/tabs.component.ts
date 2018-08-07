import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  
  characters = [] ;
  chosenList = 'all';
  swService: StarWarsService;

  constructor(swSerivce: StarWarsService) {
    this.swService = swSerivce;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }

}
