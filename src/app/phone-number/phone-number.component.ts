import { Component, OnInit } from '@angular/core';
import {Phonenumber} from '../phonenumber.model'
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  phone = new Phonenumber();
  dataArray = Array();


  constructor() { }

  ngOnInit(): void {
    this.phone = new Phonenumber ();
    this.dataArray.push(this.phone);
  }
  addForm() {
    this.phone = new Phonenumber();
    this.dataArray.push(this.phone);
  }
  removeForm(index: any) {
    this.dataArray.splice(index);
  }
  onSubmit() {
    console.log(this.dataArray);
  }
}
