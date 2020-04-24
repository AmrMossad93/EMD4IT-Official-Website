import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() imgPath: string;
  @Input() title: string;
  @Input() route: string;
  @Input() fragment: string;
  @Input() paragraph: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
