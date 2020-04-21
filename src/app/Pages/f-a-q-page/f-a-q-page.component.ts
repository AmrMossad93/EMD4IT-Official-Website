import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-f-a-q-page',
  templateUrl: './f-a-q-page.component.html',
  styleUrls: ['./f-a-q-page.component.css']
})
export class FAQPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
  }

}
