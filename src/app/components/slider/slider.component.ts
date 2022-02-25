import {Component, Input, OnInit} from '@angular/core';
import {TouchEvent} from "../../enums/Enums";
import {ContentComponent} from "../content/content.component";

interface IMedia{
  src: string;
  type: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() media: IMedia[] = []
  slide: number = 0;

  constructor(public parent: ContentComponent) { }

  ngOnInit(): void {
  }

  move(res: {event: PointerEvent, action: TouchEvent}) {
    console.log(res);
    switch (res.action) {
      case TouchEvent.SWIPE_TO_BOTTOM:
        break;
      case TouchEvent.SWIPE_TO_LEFT:
        if(this.media.length > this.slide + 1) {
          this.slide++;
        }
        break;
      case TouchEvent.SWIPE_TO_RIGHT:
        if(this.slide > 0) {
          this.slide--;
        }
        break
    }
  }

}
