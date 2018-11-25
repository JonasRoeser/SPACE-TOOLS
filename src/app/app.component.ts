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

    else {
      alert(value);
      const dateTime: Date = new Date();

      this.chatInputs += `${dateTime.toLocaleString()}\n${value}\n`;
    }
  }
}
