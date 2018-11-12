import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() chatHistory: EventEmitter<string> = new EventEmitter(); // Achtung bei Auswahl der EventEmitter --> sollte der aus Gangular, nicht asu anderer Library sein

  public chatMessage:string;

  constructor() { }

  ngOnInit() {
  }

  public addMessage(): void {
    alert(this.chatMessage);
  }

  public addMessage2(value: string): void {
    // alert(value);

    this.chatHistory.emit(value);

    this.chatMessage = '';
  }
}
