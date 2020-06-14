import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[]=[
    new Quotes(1, 'The best argument against democracy is a conversation with the average voter.', 'Winston Churchill', 'Catherine', new Date(2020,5,12)),
    new Quotes(2, 'It is impossible to know everything we should know. All we can do is the best we can.', 'Dr.Pavesh', 'Linda', new Date(2019,12,10)),
    new Quotes(3, 'Routine is an incredible thing. We become what we repeatedly do.', 'Anonymous', 'Joe', new Date(2019,2,10)),
    new Quotes(4, 'Compatibility is not the prerequisite for love, it is the achievement of love.', 'Alain De Botton', 'Snow', new Date(2018,5,12)),
    new Quotes(5, 'We can perhaps only ever fall in love without knowing quite who we have fallen in love with', 'Wise man', 'Kapanya', new Date(2018,2,2))
  ];

  details(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addAQuote(quote){
    let allQuotesLength = this.quotes.length;
    quote.id = allQuotesLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quotes.push(quote)
  }

  hideQuote(seen, index){
    if(seen) {
      let toHide = confirm(`Are you sure you want to delete quote?`)
      
      if (toHide){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
