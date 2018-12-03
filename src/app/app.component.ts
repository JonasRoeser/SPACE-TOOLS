import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SPACE-TOOLS';
  public chatInputs: string;

  public addToChatHistory(value:string):void {
    if(!this.chatInputs) {
      this.chatInputs = '';
    }

    const dateTime: Date = new Date();
    
    this.chatInputs += `<i><font size="0.5em">${dateTime.toLocaleString()}</font></i><br>${value}<br><br>`;
  }
}