import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activateRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activateRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
      }
    );
  }
}
