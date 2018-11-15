import { Component } from '@angular/core';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SPACE-TOOLS';
  public chatInputs: string;
  public Username: string;

  public addUsername
  (value:string):void {
    this.Username = value;
  }
  
  public addToChatHistory(value:string):void {
    if(!this.chatInputs) {
      this.chatInputs = '';
    }
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(!this.Username || this.Username.length <= 1 || format.test(this.Username)) {
      alert("Bitte gib einen gültigen Benutzernamen (mehr als 1 Buchstabe, keine Sonderzeichen) ein und bestätige mit Enter!")
    }

    else{
      this.chatInputs += this.Username + ": " + value + "\n";
    }
  }elelse
}
