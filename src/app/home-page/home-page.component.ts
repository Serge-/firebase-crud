import {Component, OnInit, ElementRef, AfterViewChecked} from '@angular/core';
import {ProvidersComponent} from "../providers/providers.component";
import {FirebaseListObservable} from "angularfire2";
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public afService: ProvidersComponent) {
    this.messages = this.afService.messages;
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }

  // I forgot to add this but thanks for letting me know in the comments so I could update it!
  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  ngOnInit() {
  }

}
