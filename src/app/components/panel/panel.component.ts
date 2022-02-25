import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  showSearchInput = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearchInput(event: Event) {
    if ((event.target as HTMLInputElement).id !== '') {
      this.showSearchInput = !this.showSearchInput;
    }
  }
}
