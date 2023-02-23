import { Component, AfterContentInit, ViewChild, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { InMemoryDataService } from '../Services/in-memory-data.service';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit, AfterContentInit {
  
  @ViewChild('mybutton') mybutton: ElementRef;
  public myData: any = [];

  public constructor(private inMemoryService: InMemoryDataService) {}

  public ngOnInit(): void {
    this.myData = this.inMemoryService.createDb().data;
  }

  ngAfterContentInit() {
    if(this.mybutton) {
      const click$ = fromEvent(this.mybutton.nativeElement, 'click');
      const mouseOver$ = fromEvent(this.mybutton.nativeElement, 'mouseover');
      const mouseOut$ = fromEvent(this.mybutton.nativeElement, 'mouseout');
      
      click$.subscribe(val => console.log('Clicked on button'));
      mouseOver$.subscribe(val => console.log('Mouse over on button'));
      mouseOut$.subscribe(val => console.log('Mouse out from button')); 
    }
  }

  public trackByFn() {
    
  }
}
