import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SPACE-TOOLS';
  public chatInput: string;

  constructor() {
    this.chatInput = '';
  }

  public onChatHistory(value:string):void {
    if(!this.chatInput) {
      this.chatInput = '';
    }
    this.chatInput += value;
  }
}
