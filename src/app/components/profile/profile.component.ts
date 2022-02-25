import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TouchEvent} from '../../enums/Enums'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('profileContent') profileContent: ElementRef | undefined;

  contents = [
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        },
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'video'
        }
      ],
      like: true,
      row: 3,
      column: 2
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1644530777805-944f59551c4b?fit=crop&w=687&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1644594717864-74fe64380d58?fit=crop&w=687&q=10',
          type: 'img'
        },{
          src: 'https://images.unsplash.com/photo-1644595025813-2fe4fa137e77?fit=crop&w=687&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1644600484950-62d47c5ee3b7?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1644589693519-2e5aab4ed792?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1644424236613-d7964a3c21ea?fit=crop&w=687&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 2,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 2,
      column: 2
    },
    {
      media: [
        {
          src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?fit=crop&w=500&q=10',
          type: 'img'
        }
      ],
      like: false,
      row: 1,
      column: 1
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.profileContent);
  }

}
