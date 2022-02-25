import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';
import {fromEvent} from 'rxjs';
import {TouchEvent} from '../enums/Enums'

@Directive({
    selector: '[appTouch]'
})
export class TouchDirective {

    @Output() appTouch = new EventEmitter();
    private touchStart: PointerEvent | null = null;
    private config = {
        delay: 1500,
        deviation: 5
    };

  @HostListener('pointerdown', ['$event'])
  pointerdown(event: PointerEvent) {
    this.touchStart = event;
    setTimeout(() => {
      if (this.touchStart) {
        this.appTouch.emit({event: event, action: TouchEvent.LONG_TOUCH});
        this.touchStart = null;
      }
    }, 1500);
    event.stopPropagation();
  }

  @HostListener('pointerup', ['$event'])
  pointerup(event: PointerEvent) {
      this.callback(event);
  }

  @HostListener('pointercancel', ['$event'])
  pointercancel(event: PointerEvent) {
    this.callback(event);
    event.stopPropagation();
  }

  callback(event: PointerEvent) {
    if (!this.touchStart) {
      return;
    }
    const xs = this.touchStart.x;
    const ys = this.touchStart.y;
    const xe = event.x;
    const ye = event.y;
    if (Math.abs(xs - xe) > Math.abs(ys - ye)) {
      if (xs - xe > this.config.deviation) {
        this.appTouch.emit({event: event, action: TouchEvent.SWIPE_TO_LEFT});
        this.touchStart = null;
        return;
      } else if (xs - xe < -this.config.deviation) {
        this.appTouch.emit({event: event, action: TouchEvent.SWIPE_TO_RIGHT});
        this.touchStart = null;
        return;
      }
    } else {
      if (ys - ye > this.config.deviation) {
        this.appTouch.emit({event: event, action: TouchEvent.SWIPE_TO_TOP});
        this.touchStart = null;
        return;
      } else if (ys - ye < -this.config.deviation) {
        this.appTouch.emit({event: event, action: TouchEvent.SWIPE_TO_BOTTOM});
        this.touchStart = null;
        return;
      }
    }
    if (event.timeStamp - this.touchStart.timeStamp < this.config.delay) {
      this.touchStart = null;
    }
  }

}
