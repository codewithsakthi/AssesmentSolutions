import { Component, OnInit } from '@angular/core';
import {CompoService} from '../compo.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(public shared :CompoService ) { }

  ngOnInit(): void {
  }

}
