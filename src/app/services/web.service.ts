import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public preuTotal!: number;
  private preuWeb: number = 0;
  private preuSeo: number = 0;
  private preuAds: number = 0;
  private numPags!: number;
  private numIdioms!: number;
  public numsWebTotal!: number;

  options:any[] = [
    {txt: "Una pàgina web (500 €)", selec: false, preu: 500},
    {txt: "Una consultoria SEO (300 €)", selec: false, preu: 300},
    {txt: "Una campanya de Google Ads (200 €)", selec: false, preu: 200}
  ];
  numOptions:any[] = [
    {txt: "Número de páginas", quant: this.numPags},
    {txt: "Número de idiomas", quant: this.numIdioms}
  ];

  constructor() { }

  contract(){
    if(this.options[0].selec == true){
      this.preuWeb = this.options[0].preu;
    }else{
      this.preuWeb = 0;
    }
    if(this.options[1].selec == true){
      this.preuSeo = this.options[1].preu;
    }else{
      this.preuSeo = 0;
    }
    if(this.options[2].selec == true){
      this.preuAds = this.options[2].preu;
    }else{
      this.preuAds = 0;
    }
    this.preuTotal = this.preuWeb + this.preuSeo + this.preuAds;
  }

  preuTotalWeb(){
    this.numsWebTotal = (this.numPags + this.numIdioms) * 30;
    if(isNaN(this.preuTotal)){
      this.preuTotal += this.numsWebTotal;
    }
  }

}
