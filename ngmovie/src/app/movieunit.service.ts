import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieUnit } from './components/index/MovieUnit';


@Injectable({
  providedIn: 'root'
})
export class MovieUnitService {
  uri = 'http://localhost:4000/movieunits';

  constructor(private http: HttpClient) { }

  addMovieUnit(movie_name, movie_summary,movie_image) {
    const obj = {
      movie_name: movie_name,
      movie_summary: movie_summary,
      movie_image:movie_image
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getMovieUnits() {
    return this
           .http
           .get(`${this.uri}`);
    }
    editMovieUnit(movie_name) {
      return this
                .http
                .get(`${this.uri}/edit/${movie_name}`);
      }
    }

    
    

  


 