import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appPlay]'
})
export class PlayDirective implements OnChanges{

  @Input() appPlay: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appPlay) {
      this.el?.nativeElement.play();
    } else {
      this.el?.nativeElement.pause();
    }
  }
}
