import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() seen = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfHates : number = 0;

  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfHates++;
  }
  constructor() { }

  ngOnInit() {
  }

}
