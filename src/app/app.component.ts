import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { MyservicenameService } from './myservicename.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyservicenameService]
})
export class AppComponent {
  spaceScreens: Array<any>;
   title: string;

  constructor(private http:Http, private _MyservicenameService:MyservicenameService) {

    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

  }
  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }
  ngOnInit() {
        this.title = this._MyservicenameService.someMethod();
    }
}
