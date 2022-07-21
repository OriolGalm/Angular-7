import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  constructor(public readonly webSvc: WebService) { }

  showPrices(){
    this.webSvc.contract();
  }

  ngOnInit(): void {
  }

}
