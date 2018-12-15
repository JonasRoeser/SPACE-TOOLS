import { Component } from '@angular/core';

import { Person } from 'src/app/shared/Models/person';

import { ChatService } from 'src/app/shared/services/chat.service';
import { ChatMessage } from 'src/app/shared/Models/chat-message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {
  public chatMessage: string;

  constructor(private chatService: ChatService) {
  }

  public addMessage(value: string): void {
    this.chatMessage = this.chatMessage.trim()

    if(this.chatMessage.length !== 0) {
      if (Person.Nickname) {
        const messageToSend: ChatMessage = new ChatMessage();
        messageToSend.message = value.replace(":)", "	&#128578;").replace(":D", "&#128515;").replace(";)", "&#128521;").replace(":(", "&#128577;").replace(";P", "	&#128540;").replace(";*", "&#128536;").replace("xD", "&#128518;").replace(":P", "&#128539;").replace("-.-", "&#128529;").replace(":O", "&#128558;");
        messageToSend.nickname = Person.Nickname;
        messageToSend.color = Person.Color;

        this.chatService.addToHistory(messageToSend)
          .subscribe(response => {
            this.chatMessage = '';
          },
            (error: any) => {
              console.log(error);
            });
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