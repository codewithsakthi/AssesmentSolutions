import { Component, OnInit } from '@angular/core';
import {CompoService} from '../compo.service'
@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  sharedMessage: string = '';
  constructor(public shared: CompoService) { }

  ngOnInit(): void {
  }

}
