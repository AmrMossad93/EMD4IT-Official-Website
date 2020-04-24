import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() imgName: string;
  @Input() category: string;
  @Input() tittle: string;
  @Input() route: string;
  @Input() fragment: string;
  @Input() date: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
