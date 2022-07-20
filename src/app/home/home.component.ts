import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  preuTotal!: Number;
  preuCanvi!: Number;
  index!: number;
  arrayPreu: Number[] = [];

  options:any[] = [
    {txt: "Una pàgina web (500 €)", selec: false, preu: 500},
    {txt: "Una consultoria SEO (300 €)", selec: false, preu: 300},
    {txt: "Una campanya de Google Ads (200 €)", selec: false, preu: 200}
  ];
  
  preu!: number;

  constructor() { }

  ngOnInit(): void {
  }

  contract(){
    //this.arrayPreu = [];
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i].selec == true){
        this.preuTotal = parseInt(this.options[i].preu);
      }
      if(this.options[i].selec == false) {
        this.preuCanvi = this.options[i].preu;
        this.index = this.arrayPreu.indexOf(this.preuCanvi);
        if(this.index != -1){
          this.arrayPreu.splice(this.index, 1);
        }
      }
    }
    this.arrayPreu.push(this.preuTotal);
    console.log("Array de preus: ", this.arrayPreu);
    console.log("Variable de preus: ", this.preuTotal);
    console.log("Options: ", this.options);
  }

}
