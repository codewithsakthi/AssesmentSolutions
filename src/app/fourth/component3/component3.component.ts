import { Component, OnInit } from '@angular/core';
import {CompoService} from '../compo.service'
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor(public shared: CompoService) { }

  ngOnInit(): void {
  }

}
