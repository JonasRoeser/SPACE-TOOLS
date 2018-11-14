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

    this.chatInputs += value + "\n";
  }
}
