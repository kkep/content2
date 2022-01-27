import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() data: any;

  @ViewChild('transformer') transformer: ElementRef | undefined;

  private transformed = false;

  @HostBinding('style') get style() {
    return {
      width: 'calc((100vw - 40px) / 3 * ' + this.data.column + ')',
      height: 'calc((100vw - 40px) / 3 * ' + this.data.row + ')',
      gridRow: 'span ' + this.data.row,
      gridColumn: 'span ' + this.data.column
    }
  }

  constructor(public pf: ProfileComponent) {
  }

  ngOnInit(): void {
  }

  @HostListener('mousedown')
  transformBefore() {
    const el = this.transformer?.nativeElement;
    el.style.zIndex = this.transformed ? 0 : 1;
  }

  @HostListener('click')
  transform() {
    const el = this.transformer?.nativeElement;
    const pf = this.pf.profileContent?.nativeElement;
    el.style.width = this.transformed ? '' : this.pf.profileContent?.nativeElement.clientWidth + 'px';
    el.style.height = this.transformed ? '' : this.pf.profileContent?.nativeElement.clientHeight + 'px';
    el.style.marginLeft = this.transformed ? '' : -el.offsetLeft + 'px';
    el.style.marginTop = this.transformed ? '' : -el.offsetTop + pf.scrollTop  + 'px';
    pf.style.overflow = this.transformed ?  'scroll' : 'hidden';
    this.transformed = !this.transformed;
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: Event) {
    if (this.transformed) {
      this.transformed = !this.transformed;
      this.transform();
    }
    event.stopPropagation();
  }
}
