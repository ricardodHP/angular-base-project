import {AfterViewChecked, Component, OnInit} from '@angular/core';
// import {SessionService} from 'src/app/session.service';
// import {GlobalFunctionsPipe} from '../../global-functions.pipe';
// import {StringResources} from '../stringResources';
// import {Modal} from '../Modal';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Strings: StringResources;
  public selectValue = '';

  constructor() {
  }

  ngOnInit() {
  }
}
