import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
  }

}
