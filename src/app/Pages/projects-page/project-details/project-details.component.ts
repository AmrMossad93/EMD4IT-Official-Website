import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
  }

}
