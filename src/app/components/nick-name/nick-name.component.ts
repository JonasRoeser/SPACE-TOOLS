import { Component, OnInit } from '@angular/core';
import { Person } from './shared/Models/person.ts';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public createNickname(name: string): void {
    // alert(name);
    Person.Nickname = name;

    alert(Person.Nickname);
  }
}
