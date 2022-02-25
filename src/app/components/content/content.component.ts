import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";
import {TouchEvent} from "../../enums/Enums";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() data: any;

  @ViewChild('transformer') transformer: ElementRef | undefined;

  private _transformed = false;

  showed = false;
  template: TemplateRef<any> | null = null;

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

  get transformed() {
    return this._transformed;
  }

  @HostListener('click')
  transform() {
    if (this.showed) {
      return;
    }
    const el = this.transformer?.nativeElement;
    const pf = this.pf.profileContent?.nativeElement;
    el.style.zIndex = this._transformed ? 0 : 999;
    el.style.width = this._transformed ? '' : this.pf.profileContent?.nativeElement.clientWidth + 'px';
    el.style.height = this._transformed ? '' : this.pf.profileContent?.nativeElement.clientHeight + 'px';
    el.style.marginLeft = this._transformed ? '' : -el.offsetLeft + 'px';
    el.style.marginTop = this._transformed ? '' : -el.offsetTop + pf.scrollTop  + 'px';
    pf.style.overflow = this._transformed ?  'scroll' : 'hidden';
    this._transformed = !this._transformed;
    //this.commentsHide = this._transformed ? this.commentsHide : true;
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: Event) {
    if (this._transformed) {
      this._transformed = !this._transformed;
      this.transform();
    }
    event.stopPropagation();
  }

  show(event: Event, tmp: TemplateRef<any> | null) {
    if (this.showed) {
      this.showed = !this.showed;
    } else {
      this.template = this.template ? null : tmp;
    }
    setTimeout(() => {
      if (!tmp) {
        this.template = tmp;
      } else {
        this.showed = !this.showed;
      }
    }, 300)

    event.stopPropagation();
  }

  toggleLike($event: Event) {
    this.data.like = !this.data.like;
    $event.stopPropagation();
  }
}
