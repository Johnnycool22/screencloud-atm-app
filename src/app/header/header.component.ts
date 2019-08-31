import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    // Animation has its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('3000ms ease-out')),
      transition('default => rotated', animate('3000ms ease-in'))
  ])
]
})
export class HeaderComponent implements OnInit {
  title = 'The ATM App';

  state = 'default';

  constructor() { }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}

  ngOnInit() {
  }

}
