import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    const menu = $('#navigation');
    $(document).ready(() => {

      if (menu.length) {
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
          menu.slicknav({
            prependTo: '.mobile_menu',
            closedSymbol: '+',
            openedSymbol: '-',
            duplicate: true,
            parentTag: 'a',
          });
        });

      }

    });

    // tslint:disable-next-line:only-arrow-functions
    $(window).on('scroll', function() {
      const scroll = $(window).scrollTop();
      if (scroll < 245) {
        $('.header-sticky').removeClass('sticky-bar');
      } else {
        $('.header-sticky').addClass('sticky-bar');
      }
    });

    // tslint:disable-next-line:only-arrow-functions
    $(window).on('scroll', function() {
      const scroll = $(window).scrollTop();
      if (scroll < 245) {
        $('.header-sticky').removeClass('sticky');
      } else {
        $('.header-sticky').addClass('sticky');
      }
    });
  }


}
