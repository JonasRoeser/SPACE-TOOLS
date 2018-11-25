import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Person } from 'src/app/shared/Models/person';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() chatCache: EventEmitter<string> = new EventEmitter();

  public chatMessage:string;

  constructor() { }

  ngOnInit() {
  }
  
  public addMessage(value: string): void {
    this.chatMessage = this.chatMessage.trim()

    if(this.chatMessage.length !== 0) {
      if (Person.Nickname) {
        value = `${Person.Nickname}\n${value}`;
  
        this.chatCache.emit(value);
        this.chatMessage = '';
      }
      
      else {
        alert("Gib bitte einen Benutzernamen ein!");
      }
    }

    else {
      alert("Gib bitte einen Text ein!")
    }
  }
}