import {Injectable} from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {
  }

  show() {
    $('#loader').modal('show');
  }

  hide() {
    setTimeout(() => {
      $('#loader').modal('hide');
    }, 1500);
  }
}
