import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SPACE-TOOLS';
  public chatInput: string;

  public onChatHistory(value:string):void {
    if(!this.chatInput) {
      this.chatInput = '';
    }

    this.chatInput += value + "\n";
  }
}
