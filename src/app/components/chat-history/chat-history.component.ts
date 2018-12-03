import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  @Input() history: string;public

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // hier wird jede 2s getHistory aufgerufen
  }

  private getHistory() {
    // hier können wir alles wieder zusammenfügen
    // wir können das am server generierte datum hier abrufen
  }
}
