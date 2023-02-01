import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare var Prism:any;
declare var document:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public indexHtml = "";
  public indexRenderedHtml = "";

  public constructor(private http: HttpClient) {

  }


  public ngOnInit(): void {
    // This API is designed to be slow. An actual API might be faster but the number of requests as well as the backend often do slow a request down too.
    this.http.get<any>('/index.html', { responseType: 'text' as 'json'}).subscribe(data => {
      this.indexHtml = data;
      setTimeout(() => {

      Prism.highlightAll();

     this.indexRenderedHtml = document.querySelector('*').outerHTML;

     setTimeout(() => {

      Prism.highlightAll();
     },100);
      },100);

    })
  }
}
