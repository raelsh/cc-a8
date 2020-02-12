import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number =0;
  name: string ='hey';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(operation){
    if(operation=="p")
    this.clickCounter +=1;

    if(operation=="m")
    this.clickCounter -=1;

  }

  setClasses(){
    let myClasses ={
      active: this.clickCounter >=3,
      notactive: this.clickCounter <=2 
    }
    return myClasses;
  }

}
