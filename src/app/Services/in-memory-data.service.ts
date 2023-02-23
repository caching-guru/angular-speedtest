import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const data = [{
      "website": "Caching Guru",
      "type": "Angular"
    },
    {
      "website": "Caching Guru",
      "type": "React"
    },
    {
      "website": "Caching Guru",
      "type": "Ionic"
    },
    {
      "website": "Caching Guru",
      "type": "Vue"
    }];
    return { data };
  }

}
