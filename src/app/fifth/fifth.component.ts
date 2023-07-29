import { Component } from '@angular/core';
import { DataService } from "../services/data.service"

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent {
  title = "DynamicTabComponents";
  componenet_x_Arr: number[] = [];

  

  constructor(private dataService: DataService) {}
  onComponentAdded() {
    this.componenet_x_Arr.push(1);
  }
  save = () => {
    this.dataService.saveFinal();
  };
}