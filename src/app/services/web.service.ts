import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public preuTotal!: number;
  private preuSubTotal: number = 0;
  private preutotalDef: number = 0;
  private preuWeb: number = 0;
  private preuSeo: number = 0;
  private preuAds: number = 0;
  public numPags: any =  1;
  public numIdioms: any = 1;
  private numsWebTotal: number = 0;

  constructor() { }

  options:any[] = [
    {txt: "Una pàgina web (500 €)", selec: false, preu: 500},
    {txt: "Una consultoria SEO (300 €)", selec: false, preu: 300},
    {txt: "Una campanya de Google Ads (200 €)", selec: false, preu: 200}
  ];

  numOptions = new FormGroup ({
    quantPags: new FormControl(''),
    quantIdioms: new FormControl('')
  });

  contract(): void{
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
    this.preuTotal = this.preuWeb + this.preuSeo + this.preuAds + this.numsWebTotal;
    this.preutotalDef = this.preuTotal - this.numsWebTotal;
  }

  preuTotalWeb(): void{
    this.preuSubTotal = this.preutotalDef;
    this.numsWebTotal = (this.numPags * this.numIdioms * 30);
    this.preuSubTotal += this.numsWebTotal;
    this.preuTotal = this.preuSubTotal;
  }

  preuTotalPag(): void{
    this.numPags = this.numOptions.value.quantPags;
    this.preuTotalWeb();
  }
  preuTotalLeng(): void{
    this.numIdioms = this.numOptions.value.quantIdioms;
    this.preuTotalWeb();
  }

  preuTotalUpDown(): void{
    this.preuSubTotal = this.preutotalDef;
      this.numsWebTotal = (this.numPags * this.numIdioms * 30);
      this.preuSubTotal += this.numsWebTotal;
      this.preuTotal = this.preuSubTotal;
  }

  upPageSvc(): void{
    this.numPags++;
    this.preuTotalUpDown();
  }
  upLengSvc(): void{
    this.numIdioms++;
    this.preuTotalUpDown();
  }
  downPageSvc(): void{
    if(this.numPags >= 2){
      this.numPags--;
      this.preuTotalUpDown();
    }
  }
  downLengSvc(): void{
    if(this.numIdioms >= 2){
      this.numIdioms--;
      this.preuTotalUpDown();
    }
  }

}
