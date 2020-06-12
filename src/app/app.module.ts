import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quotes/quote-details/quote-details.component';
import { TimeCountPipe } from './time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    TimeCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
