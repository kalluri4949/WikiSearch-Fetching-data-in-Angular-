import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wikiservice: WikipediaService) {}
  onSubmittedSearch(term: string): void {
    this.wikiservice.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
