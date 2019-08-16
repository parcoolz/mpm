import { Component, OnInit } from '@angular/core';
import { MovieUnit } from './MovieUnit';
import { MovieUnitService } from '../../movieunit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  movieunits: MovieUnit[];  
  constructor(private movieunitservice: MovieUnitService) { }

  ngOnInit() {
    this.movieunitservice
      .getMovieUnits()
      .subscribe((data: MovieUnit[]) => {
      this.movieunits = data;
    });
  }
}

  
