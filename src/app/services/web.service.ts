import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public preuTotal: number = 0;
  private preuSubTotal: number = 0;
  private preutotalDef: number = 0;
  private preuWeb: number = 0;
  private preuSeo: number = 0;
  private preuAds: number = 0;
  public numPags: any =  1;
  public numIdioms: any = 1;
  private numsWebTotal: number = 0;
  public nomPr!: string;
  public clientPr!: string;
  public arrayPressupost: any[] = [];
  private index: number = 0;

  constructor() { }

  options:any[] = [
    {txt: "Una pàgina web (500 €)", selec: false, preu: 500},
    {txt: "Una consultoria SEO (300 €)", selec: false, preu: 300},
    {txt: "Una campanya de Google Ads (200 €)", selec: false, preu: 200}
  ];

  nouPressupost = new FormGroup ({
    nomPressupost: new FormControl ('', Validators.required),
    client: new FormControl ('', Validators.required)
  });

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

  finalPressupost(valor:any){
    this.index++;
    const pressObj = {
      index: this.index,
      nomPressupost: valor.value.nomPressupost,
      client: valor.value.client,
      web: this.options[0].selec == true ? this.options[0].preu : '0',
      seo: this.options[1].selec == true ? this.options[1].preu : '0',
      ads: this.options[2].selec == true ? this.options[2].preu : '0',
      pags: this.numPags,
      leng: this.numIdioms,
      total: this.preuTotal,
      date: new Date().toLocaleString()
    }
    this.arrayPressupost.push(pressObj);
    console.log("L'objecte: ", this.arrayPressupost);
  }

  orderAl(){
    this.arrayPressupost.sort((a, b) => {
      var textA = a.nomPressupost.toUpperCase();
      var textB = b.nomPressupost.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
  orderDate(){
    this.arrayPressupost.sort((a, b) => {
      var dateA = a.date;
      var dateB = b.date;
      return (dateA < dateB) ? -1 : (dateA > dateB) ? 1 : 0;
    });
  }
  orderIndex(){
    this.arrayPressupost.sort((a, b) => {
      var indexA = a.index;
      var indexB = b.index;
      return (indexA < indexB) ? -1 : (indexA > indexB) ? 1 : 0;
    });
  }

  /* cercador(){

  } */

}
