import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicpage',
  templateUrl: './dynamicpage.component.html',
  styleUrls: ['./dynamicpage.component.scss']
})
export class DynamicpageComponent implements OnInit {
  public entries:any[] = [];
  public loading = true;

  public constructor(private http: HttpClient) {

  }


  public ngOnInit(): void {
    this.loading = true;
    // This API is designed to be slow. An actual API might be faster but the number of requests as well as the backend often do slow a request down too.
    this.http.get<any>('https://api.angularspeedexample.com/mockdata.json?timeout=4').subscribe(data => {
      this.entries = data.data;
      this.loading = false;
    })
  }
}
