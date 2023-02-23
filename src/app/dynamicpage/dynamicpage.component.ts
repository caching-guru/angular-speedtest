import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CommService } from '../Services/comm.service';

@Component({
  selector: 'app-dynamicpage',
  templateUrl: './dynamicpage.component.html',
  styleUrls: ['./dynamicpage.component.scss']
})
export class DynamicpageComponent implements OnInit, OnChanges {
  public entries:any[] = [];
  public loading = true;

  public constructor(private http: HttpClient, 
    private commService: CommService,
    private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cd.detectChanges();
  }

  public ngOnInit(): void {
    this.loading = true;
    // This API is designed to be slow. An actual API might be faster but the number of requests as well as the backend often do slow a request down too.
    this.commService.getData().subscribe((data: any) => { 
      this.entries = data;
      this.loading = false;
    })
  }
}
