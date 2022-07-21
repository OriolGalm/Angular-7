import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public readonly webSvc: WebService) { }

  ngOnInit(): void {
  }

  showContract(){
    this.webSvc.contract();
  }

}
