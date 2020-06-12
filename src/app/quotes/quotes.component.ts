import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[]=[
    new Quotes(1, 'Character is revealed through choice', 'Anonymous', 'Catherine', new Date(2020,6,12))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
