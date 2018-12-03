import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  //@Output() chatHistory: EventEmitter<string> = new EventEmitter(); // Achtung bei Auswahl der EventEmitter --> sollte der aus Gangular, nicht asu anderer Library sein

  public chatMessage:string;

  constructor(private chatService: chatService) { }

  ngOnInit() {
  }

  public addMessage(): void {
    alert(this.chatMessage);
  }

  public addMessage2(value: string): void {
    if(Person:Nickname) {
      value = `${Person.nickname}<br>${value}`;
      this.chatMessage='';

      const messageToSend: ChatMessage = new ChatMessage();
      messageToSend.message = value
      messageToSend.nickname = Person.Nickname

      this.chatService.addToHistory(messageToSend)
      // note: private variable von chatService hier nicht mehr accessible
      .subscribe(response => {
        // response geht mit fat arrow function über in nachricht löschen
        this.chatMessage = '';
      },
      error => console.log(<any>error)),
      () => { });
      // note: um evtl. errors mitzubekommen
    }
    // alert(value);
    //value += Person.Nickname;
    //this.chatHistory.emit(value);

    //this.chatMessage = '';
  }
}
