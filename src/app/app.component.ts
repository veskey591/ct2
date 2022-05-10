import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ct2';
  firstgen: {name:string, departmentname:string} = {
    name: "Джеймс Квинси",
    departmentname:"Генеральный директор"
  }
  departments: {departname:string, color:string}[] = [
    {
      departname:"Департмент развития",
      color:"deeppink"
    },
    {
      departname:"Финансовый департмент",
      color:"lightgreen"
    },
    {
      departname:"Департмент продаж",
      color:"lightsalmon"
    },
    {
      departname:"Департмент логистики",
      color:"lightblue"
    },

  ]
}
