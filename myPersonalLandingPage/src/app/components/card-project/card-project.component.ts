import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  constructor() { }

  @Input()
  photo:string = ""

  @Input()
  name: string = ""

  @Input()
  description:string = ""

  @Input()
  techs:string[] = ['ANGULAR','HTML', 'CSS']

  @Input()
  repository:string = ""

  ngOnInit(): void {
  }

}
