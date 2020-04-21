import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const testimonial = $('.h1-testimonial-active');
    if (testimonial.length) {
      testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        loop: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
      });
    }


    // tslint:disable-next-line:variable-name
    const client_list = $('.completed-active');
    if (client_list.length) {
      client_list.owlCarousel({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        speed: 3000,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        margin: 15,

        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }

    // tslint:disable-next-line:variable-name
    const nice_Select = $('select');
    if (nice_Select.length) {
      nice_Select.niceSelect();
    }
    $('[data-background]').each(function() {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    function mainSlider() {
      const BasicSlider = $('.slider-active');
      // tslint:disable-next-line:only-arrow-functions
      BasicSlider.on('init', function(e, slick) {
        const $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      // tslint:disable-next-line:only-arrow-functions
      BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        const $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        const animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
          const $this = $(this);
          const $animationDelay = $this.data('delay');
          const $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          // tslint:disable-next-line:only-arrow-functions
          $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
          });
        });
      }
    }

    mainSlider();
  }

}
