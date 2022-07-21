import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public preuTotal!: Number;
  private preuWeb: number = 0;
  private preuSeo: number = 0;
  private preuAds: number = 0;
  private numPags: number = 0;
  private numIdioms: number = 0;
  private numsWebTotal: number = 0;

  options:any[] = [
    {txt: "Una pàgina web (500 €)", selec: false, preu: 500},
    {txt: "Una consultoria SEO (300 €)", selec: false, preu: 300},
    {txt: "Una campanya de Google Ads (200 €)", selec: false, preu: 200}
  ];
  numOptions:any[] = [
    {txt: "Número de páginas"},
    {txt: "Número de idiomas"}
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

  /* preuTotalWeb(){
    if(this.numOptions[0] == true){

    }
  } */

}
