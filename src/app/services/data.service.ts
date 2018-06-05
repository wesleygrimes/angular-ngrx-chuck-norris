import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke, JokeResult } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://api.icndb.com';
  constructor(private http: HttpClient) { }
  getJokes(): Observable<Joke[]> {
    return this.http
      .get<JokeResult>(
      `${this.API_BASE_URL}/jokes/random/5?escape=javascript&limitTo=[nerdy]`
      )
      .pipe(map(result => result.value));
  }
}