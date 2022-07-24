import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  constructor(public readonly webSvc: WebService) { }

  ngOnInit(): void {
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

}
