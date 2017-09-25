import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  constructor(private http: Http){ 
      this.http= http;
  }
  private moviesUrl = 'https://api.themoviedb.org/3/movie/';
  private api_key_string = '?api_key=35c1d4752f0c68fdaf922b9c3f5fca48';

  private link = 'https://api.themoviedb.org/3/search/movie?api_key=35c1d4752f0c68fdaf922b9c3f5fca48&language=en-US&';
  
  private data:any;
  get_data(moviename: string):any{
   const url = `${this.link}+'&query='+${moviename}`;
   this.data=this.http.get(url);
   return this.data;
  }

  get_movie(id: number) {
    const url = this.moviesUrl + id + this.api_key_string;
    return this.http.get(url).map(response => response.json());
  }  
}  