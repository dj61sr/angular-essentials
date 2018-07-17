import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.html',
  styleUrls: ['./cart-component.css']
})
export class CartComponent implements OnInit {
  @Input() items = ['Apples', 'Bananas', 'Cherries'];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = "";

  onAddItem(newItem) {
    this.itemAdded.emit(this.newItem);
    this.items.push(this.newItem);
    console.log(this.items);
  }
  constructor() { }

  ngOnInit() {
  }

}
