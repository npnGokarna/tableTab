import { Component, OnInit } from '@angular/core';

import {Info} from './info.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public info: Info[] = [];

  constructor() {
    this.info = [];
   }

  ngOnInit() {
  }
  onSignUp = ( info: Info) => {
    console.log(info);
    this.info.push({fName: info.fName, lName: info.lName, gender: info.gender,
      username: info.username, email: info.email, password: info.password});
    console.log(this.info);
    console.log('data stored in table');
  }

}
