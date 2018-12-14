import { Component, OnInit } from '@angular/core';

import { Person } from 'src/app/shared/Models/person';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  public chatUsername:string;
  public chatUsercolor:string;
  public changeTestName:string;
  public changeTestColor:string;

  constructor() { }

  ngOnInit() {
  }

  public outputUsername(name: string, value: string): void {
    this.chatUsername = this.chatUsername.trim()

    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(!this.chatUsername || this.chatUsername.length <= 1 || format.test(this.chatUsername)) {
      alert("Bitte gib einen gültigen Benutzernamen (mehr als 1 Buchstabe, keine Sonderzeichen) ein und drücke Speichern!")
    }
    
    else{
      Person.Nickname = name;
      this.changeTestName = name;
      Person.Color = value;
      this.changeTestColor = value;
    }
  }
}