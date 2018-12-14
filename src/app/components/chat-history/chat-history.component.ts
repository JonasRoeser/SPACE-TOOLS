import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  
  public history: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 1);
  }

  private getHistory(): void {
    this.chatService.getHistory()
      .subscribe(response => {
        this.history = '';

        for (const history of response) {
          const date = new Date(history.date);

          this.history += `<i><font size="0.5em">${date.toLocaleString()}</font></i><br>
          <b><font color=${history.color}>${history.nickname}:</font></b>
          ${history.message}<br><br>`;
        }
      });
  }
}
