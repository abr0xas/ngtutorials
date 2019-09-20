import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() tittletochild: string;
  varFromChild: string= "Hola vengo desde el component hijo";
  
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage(){
     this.messageEvent.emit(this.varFromChild);
  }
  ngOnInit() {
  }

}
