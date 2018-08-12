import { Component, Output, OnInit } from '@angular/core';
import { random } from 'lodash';
import { StarWarsService } from './services/star-wars.service';

//declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'David';
  //rootName = 'Sylvia';
  //items = ['Apples', 'Bananas', 'Cherries'];
  //onNameChanged(newName) {
  //  this.rootName = newName;
  //}
  //number = 0;
  //onIncrease() {
  //  //this.number = this.number * 2;
  //  this.number = random(1, 10);
  //}
  //onItemWasAdded(newItem) {
  //  this.items.push(newItem);
  //  console.log(this.items);
  //}

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
