import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   title = "Ma Super Agence";
   isDisabled = true;
   dateNow = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
      if(this.isDisabled){
        this.isDisabled = false;
      }else{
        this.isDisabled = true;
      }
  }

}
