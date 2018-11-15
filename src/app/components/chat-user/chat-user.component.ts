import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  @Output() userCache: EventEmitter<string> = new EventEmitter();

  public chatUsername:string;

  constructor() { }

  ngOnInit() {
  }
  
  public outputUsername(value: string): void {
    this.chatUsername = this.chatUsername.trim()

    if(this.chatUsername.length !== 0) {
      this.userCache.emit(value);
    }

    else {
      alert("Gib bitte einen Benutzernamen ein!")
    }
  }
}
