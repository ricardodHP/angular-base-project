import {Injectable} from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  public mensaje: string = "";
  public titulo: string = "";

  constructor() {
  }

  show(tipo: string, titulo: string, mensaje: string) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    $('#mensaje_' + tipo).modal('show');
  }

  hide(tipo: string) {
    setTimeout(() => {
      $('#mensaje_' + tipo).modal('hide');
    }, 1000);
  }

  showModal(tipo: string, titulo: string, mensaje: string, showAccept?: boolean, showCancel?: boolean, acceptEvent?: () => void,
            cancelEvent?: () => void) {
    if (!showAccept) {
      $('#' + tipo + '_accept').hide();
    } else {
      $('#' + tipo + '_accept').off('click').on('click', () => {
        // @ts-ignore
        acceptEvent();
      });
    }

    if (!showCancel) {
      $('#' + tipo + '_cancel').hide();
    } else {
      $('#' + tipo + '_cancel').off('click').on('click', () => {
        // @ts-ignore
        cancelEvent();
      });
    }

    this.titulo = titulo;
    this.mensaje = mensaje;
    $('#mensaje_' + tipo).modal('show');
  }

  showSimpleModal(titulo: string, mensaje: string) {
    $('#default_accept').click(() => {
      $('#mensaje_default').modal('hide');
    });
    $('#default_cancel').hide();
    this.titulo = titulo;
    this.mensaje = mensaje;
    $('#mensaje_default').modal('show');
  }

  showToast(type: string, mensaje: string) {
    this.mensaje = mensaje;
    $('#peek-bar').removeClass().addClass(type + ' peek-a-bar animated fadeInDown');
    setTimeout(() => {
      $('#peek-bar').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
    }, 3000);
  }


  // modal support
  openModalSupport() {
    $('#mensaje_enviar').val('');
    $('#modal-support').modal('show');
  }
}
