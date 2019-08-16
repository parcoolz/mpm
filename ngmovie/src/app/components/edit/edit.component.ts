import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MovieUnit } from '../index/MovieUnit';
import { MovieUnitService } from '../../movieunit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movieunit: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieunitservice: MovieUnitService,
    private fb: FormBuilder) {
      this.createForm();

    }
  createForm(){ 
  this.angForm = this.fb.group({
    movie_name: ['', Validators.required ],
     movie_summary: ['', Validators.required ],
     movie_image:['', Validators.required ]
});
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieunitservice.editMovieUnit(params['movie_name']).subscribe(res => {
        this.movieunit = res;
    });
  });
  
  
  }

}
