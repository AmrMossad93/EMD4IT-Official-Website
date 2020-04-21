import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-back-last-card',
  templateUrl: './profile-back-last-card.component.html',
  styleUrls: ['./profile-back-last-card.component.css']
})
export class ProfileBackLastCardComponent implements OnInit {
  @Input() title: string;
  @Input() route: string;
  @Input() paragraph: string;
  @Input() btnName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
