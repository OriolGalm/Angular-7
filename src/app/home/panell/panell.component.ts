import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  public infoWeb!: string;

  constructor(public readonly webSvc: WebService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.webSvc.preuTotalWeb();
  }

  showPricesPag(): void{
    this.webSvc.preuTotalPag();
  }
  showPricesLeng(): void{
    this.webSvc.preuTotalLeng();
  }

  upPage(): void{
    this.webSvc.upPageSvc();
  }
  downPage(): void{
    this.webSvc.downPageSvc();
  }
  upLeng(): void{
    this.webSvc.upLengSvc();
  }
  downLeng(): void{
    this.webSvc.downLengSvc();
  }

  openXLPag(content: any){
    this.modal.open(content, {size: 'xl', centered: true});
    this.infoWeb = 'páginas';
  }
  openXLLeng(content:any){
    this.modal.open(content, {size: 'xl', centered: true});
    this.infoWeb = 'idiomas';
  }

}
