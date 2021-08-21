import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const sidebar = $('.sidebar');
    const body = $('body');
    // minimizar menu lateral
    body.toggleClass('sidebar-icon-only');

    $('.nav li a', sidebar).each((el: any, element: any) => {
      addActiveClass(element);
    });

    function addActiveClass(element: any) {
      const current = location.hash;
      if ($(element).attr('href') === current) {
        $(element).parents('.nav-item').last().addClass('active');
        if ($(element).parents('.sub-menu').length) {
          $(element).closest('.collapse').addClass('show');
          $(element).addClass('active');
        }
        if ($(element).parents('.submenu-item').length) {
          $(element).addClass('active');
        }
      }
    }

    $('.horizontal-menu .nav li a').each((element:any) => {
      const $this = $(element);
      addActiveClass($this);
    });

    sidebar.on('show.bs.collapse', '.collapse', () => {
      sidebar.find('.collapse.show').collapse('hide');
    });

    $('[data-toggle="minimize"]').on('click', () => {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.sidebar-offcanvas').toggleClass('active');
    });

    $('.nav li a', sidebar).on('click', (event:any) => {
        if (event.currentTarget.href !== '') {
          $('.active').removeClass('active');
          addActiveClass(event.currentTarget);
        }
        // ocultar menu al seleccionar una opcion
        // if (body.hasClass('sidebar-icon-only') === false) {
        //   if ($(event.target).parent().children().length === 1) {
        //     body.toggleClass('sidebar-icon-only');
        //   }
        // }
      }
    );
  }
}
