import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading: boolean = false

  constructor() { }

  ngOnInit(): void {
    const person = {
      name: 'Cristian',
      age: 24,
      city: 'Gdl',
      country: 'Mexico'
    }
  }

  onSubmit(authForm: any) {

  }
}
