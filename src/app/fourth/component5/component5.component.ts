import { Component, OnInit } from '@angular/core';
import {CompoService} from '../compo.service'
@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {
  sharedValue: string = '';
  constructor(public shared: CompoService) { }

  ngOnInit(): void {
  }

}
