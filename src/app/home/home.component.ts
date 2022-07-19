import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Ads: number = 200;
  SEO: number = 300;
  web: number = 500;
  preu!: number;

  constructor() { }

  ngOnInit(): void {
  }

  calc(){
    this.preu = this.Ads + this.SEO + this.preu;
    console.log(this.preu);
  }

}
