import { Component, OnInit, Output, EventEmitter} from '@angular/core';

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
      this.chatCache.emit(value);

      this.chatMessage = '';
    }

    else {
      alert("Gib bitte einen Text ein!")
    }
  }
}
