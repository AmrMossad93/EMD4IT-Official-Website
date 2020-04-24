import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent implements OnInit {
  @Input() imgPath: string;
  @Input() route: string;
  @Input() fragment: string;
  @Input() title: string;
  @Input() paragraph: string;
  @Input() category: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
