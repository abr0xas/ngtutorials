import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  subttitle: string = "variable desde parent";
  tittle: string = "variable from parent to child";
  textFromChild: string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage(event){
    if(this.textFromChild!=null){
      this.textFromChild="";

    }else{
      this.textFromChild= event;
    }
    
    }

}
