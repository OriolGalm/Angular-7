import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcome: boolean = true;

  constructor(public readonly webSvc: WebService) { }

  ngOnInit(): void {
  }

  showContract(){
    this.webSvc.contract();
  }

  goWelcome(){
    if(this.welcome == true){
      this.welcome = false;
    }else{
      this.welcome = true;
    }
  }

  toPressupost(valor:any){
    this.webSvc.finalPressupost(valor)
  }

}
