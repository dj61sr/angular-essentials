import { Component, Output } from '@angular/core';
import {random} from 'lodash';

//declare var _: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'David';
  rootName = 'Sylvia';
  items = ['Apples', 'Bananas', 'Cherries'];
  onNameChanged(newName) {
    this.rootName = newName;
  }

  number = 0;

  onIncrease() {
    //this.number = this.number * 2;
    this.number = random(1, 10);
  }

  onItemWasAdded(newItem) {
    this.items.push(newItem);
    console.log(this.items);
  }

 }

  
  
  

  
