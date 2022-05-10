import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thgen',
  templateUrl: './thgen.component.html',
  styleUrls: ['./thgen.component.css']
})
export class ThgenComponent {
  constructor() { }
  @Input() ds: any
  dpn: { name: string, departmentname: string, color: any }[] = [
    {
      name: "Франциско Креспо",
      departmentname: "Главный деректор по развитию",
      color: "4px solid deeppink"
    },
    {
      name: "Джон Мерфи",
      departmentname: "Генеральный директор по финансам",
      color: "4px solid lightgreen"
    },
    {
      name: "Мануэль Арройо",
      departmentname: "Генеральный директор по продажам",
      color: "4px solid lightsalmon"
    },
    {
      name: "Брайан Смит",
      departmentname: "Генеральный директор по логистике",
      color: "4px solid lightblue"
    },
  ]

}
