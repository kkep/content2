import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
