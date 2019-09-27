import { Component, OnInit } from '@angular/core';
import { interval, timer, Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  numero: string; 

  constructor(private dataService : DataService) { }

  ngOnInit() {
    const contador = interval(1000); //es una variable obeservablable

    contador.subscribe((n)=>{
      if(n % 60 == 0){
        console.log(` Cada ${n / 60} minutos ` );

      }
      if(n % 5 ==0){
        this.numero= `${n} es múltiplo de 5`;
        console.log(`${n} es múltiplo de 5` );
        this.dataService.changeMessage(this.numero);
      }else{
        this.numero= `${n} no lo es`;
        this.dataService.changeMessage(this.numero);
        console.log(this.numero );
      }
      
    });

  }

}
