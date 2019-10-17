import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../../models';

@Component({
  selector: 'app-joke-card-item',
  templateUrl: './joke-card-item.component.html',
  styleUrls: ['./joke-card-item.component.css']
})
export class JokeCardItemComponent implements OnInit {
  @Input() joke: Joke;

  constructor() {}

  ngOnInit() {}
}
