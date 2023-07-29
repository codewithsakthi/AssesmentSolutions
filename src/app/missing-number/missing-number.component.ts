import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css']
})
export class MissingNumberComponent implements OnInit {
  inputvalue: number = 0;
  result: number = 0;

  ngOnInit(): void {
  }

  constructor() { }
  resultnumber(inputvalue: number) {
    if (inputvalue % 2 === 0) {
      this.result = inputvalue * inputvalue - 1;
    } else {
      this.result = inputvalue * inputvalue + 1;
    }
  }
 

}
