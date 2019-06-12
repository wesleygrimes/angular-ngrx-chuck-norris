import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JokeStoreActions, RootStoreState } from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store.dispatch(new JokeStoreActions.LoadAction());
  }
}
