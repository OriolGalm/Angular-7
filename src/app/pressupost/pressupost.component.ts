import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
  styleUrls: ['./pressupost.component.css']
})
export class PressupostComponent implements OnInit {

  constructor(public readonly webSvc: WebService) { }

  ngOnInit(): void {
  }

  orderAlpha(){
    this.webSvc.orderAl();
  }

  orderD(){
    this.webSvc.orderDate();
  }
  orderI(){
    this.webSvc.orderIndex();
  }

}
