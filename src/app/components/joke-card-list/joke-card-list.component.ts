import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../../models';

@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.css']
})
export class JokeCardListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() loadAll = new EventEmitter();
  @Output() loadCategory = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
