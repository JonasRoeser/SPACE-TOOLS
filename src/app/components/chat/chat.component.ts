import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatMessage:string;
  public chatFlow:string; 
  public chatUser:string;
  public n:number = 0;
  public i:number = 0;


  constructor() { }

  ngOnInit() {
  }
  
  public addMessage(): void {
    this.chatMessage = this.chatMessage.trim()
    this.chatUser = this.chatUser.trim()

    if(this.chatMessage.length !== 0 && this.chatUser.length) {
      alert(this.chatMessage)
      this.n = this.n + 1
      this.i = 0
      this.chatFlow = this.chatFlow + this.chatUser + ": " + this.chatMessage + "\n"
      this.chatMessage = ""
    }

    else {
      alert("Gib bitte einen Text ein!")
    }
  }
}
