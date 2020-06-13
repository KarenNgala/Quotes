import { Component, OnInit, Input} from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;

  numberOfLikes : number = 0;
  numberOfHates : number = 0;

  upVote(){
    this.numberOfLikes++;
  }

  downVote(){
    this.numberOfHates++;}

  constructor() { }

  ngOnInit(): void {
  }

}
