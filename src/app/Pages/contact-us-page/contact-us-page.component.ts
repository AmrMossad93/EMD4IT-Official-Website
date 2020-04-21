import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
  }

}
