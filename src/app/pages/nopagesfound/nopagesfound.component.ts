import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: ['./nopagesfound.component.css']
})
export class NopagesfoundComponent implements OnInit {
  public fechaActual: number = new Date().getFullYear();
  constructor() {
  }

  ngOnInit(): void {
  }

}
