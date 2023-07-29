import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-component-x",
  templateUrl: "./component-x.component.html",
  styleUrls: ["./component-x.component.css"],
})
export class ComponentXComponent implements OnInit {
  xData: string = "First x";
  component_y_arr: number[] = []; // Update the type to number[] for component_y_arr
  Ydata: any[] = []; // You can update the type of Ydata to a more specific type if needed
  @Input() xIndex!: string; // Add '!' to indicate that the property will be initialized by Angular

  constructor() {}

  ngOnInit() {}

  onAdded(e: Event) {
    e.preventDefault();
    this.component_y_arr.push(2);
  }
}
