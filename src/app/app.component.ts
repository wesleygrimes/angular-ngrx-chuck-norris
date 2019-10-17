import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JokeUIActions, selectAppComponentViewModel } from './state/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(JokeUIActions.appComponentInitialized());
  }

  onLoadAllRequested() {
    this.store.dispatch(JokeUIActions.loadAllRequested());
  }

  onLoadCategoryRequested(category: string) {
    this.store.dispatch(JokeUIActions.loadCategoryRequested({ category }));
  }
}
