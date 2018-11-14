import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

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
