import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatMessage:string;

  constructor() { }

  ngOnInit() {
  }
  
  public addMessage(): void {
    this.chatMessage = this.chatMessage.trim()

    if(this.chatMessage.length !== 0) {
      alert(this.chatMessage)
      this.chatMessage = ""
    }

    else {
      alert("Gib bitte einen Text ein!")
    }
  }
}
