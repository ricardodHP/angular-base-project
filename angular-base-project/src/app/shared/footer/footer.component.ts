import {Component, OnInit} from '@angular/core';
import {MensajesService} from '../mensajes/mensajes.service';
import {Toast} from '../StringResources';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private mensajesService: MensajesService) {
  }

  ngOnInit() {
    this.startup();
  }

  // end modal support

  startup() {
    // Options for the observers
    let observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: []
    };

    // Un array con los umbrales para cada caje.
    // El umbral de la primer caja se crea de forma programática
    // ya que hay demasiados puntos.
    let thresholdSets = [[]];
    // thresholdSets.push(0.01);
    // porcentaje del 1 al 100 del elemento
    for (let i = 0; i <= 1.0; i += 0.01) {
      // @ts-ignore
      thresholdSets[0].push(i);
    }

    // SE OBSERVA EL PIE DE PAGINA
    observerOptions.threshold = thresholdSets[0];
    // @ts-ignore
    new IntersectionObserver(this.intersectionCallback, observerOptions).observe(document.querySelector('#footer'));
    // Scroll a la posición inicial
    $(window).scrollTop(0);
  }

  intersectionCallback(entries: any) {
    entries.forEach((entry: any) => {
      const interseccion = (Math.floor(entry.intersectionRatio * 100)); // porcentaje del elemento que se ve
      const px = (interseccion * 65) / 100;// 65px es el alto del pie de pagina, aqui se calculan los pixeles equivalentes
      // console.log('interseccion', interseccion);
      // console.log('px', px);
      // SI NO SE VE EL PIE
      if (interseccion <= 0) {
        $('.support-container').css('bottom', '-36px').off('mouseenter').on('mouseenter', () => {
          $('.support-container').removeAttr('style').css('bottom', '0px');
          $('.speech-bubble').removeAttr('style').css('bottom', '30px').removeClass('d-none');
        }).off('mouseleave').on('mouseleave', () => {
          $('.speech-bubble').removeAttr('style').css('bottom', '100px').addClass('d-none');
          $('.support-container').removeAttr('style').css('bottom', '-36px');
        });
      } else {
        // SI SE ESTA VIENDO EL PIE
        $('.support-container').css('bottom', (px - 37) + 'px').off('mouseenter').on('mouseenter', () => {
          $('.support-container').removeAttr('style').css('bottom', px + 'px');
          $('.speech-bubble').removeClass('d-none').css('bottom', (px + 20) + 'px');
        }).off('mouseleave').on('mouseleave', () => {
          $('.support-container').removeAttr('style').css('bottom', (px - 37) + 'px');
          $('.speech-bubble').addClass('d-none');
        });
      }
    });
  }
}
