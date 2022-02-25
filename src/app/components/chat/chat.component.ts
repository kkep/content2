import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('container') container: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  scrollBottom() {
    const el = this.container?.nativeElement;
    for (let i = el.scrollTop; i < el.scrollHeight - el.clientHeight; i++) {
      setTimeout(() => {
        el.scrollTop += 1;
      }, 1 * (el.scrollHeight - el.clientHeight - i))
    }
  }
}
