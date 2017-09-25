import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    private movie:  any;
    
    constructor(
      private moviesService: MoviesService,
      private route: ActivatedRoute,
      private location: Location
    ){ };
    
    ngOnInit() {
      this.route.paramMap
      .switchMap((param: ParamMap) => this.moviesService.get_movie(+param.get('id')))
      .subscribe( movie => this.movie = movie);
    }
  }
