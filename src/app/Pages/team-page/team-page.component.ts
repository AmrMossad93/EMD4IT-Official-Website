import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
  }

}
