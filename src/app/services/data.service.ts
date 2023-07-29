// Assuming other import statements are accurate
import { FileService } from "./file.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  hasValue: boolean = false;
  obj: { [key: string]: { data: string; [key: string]: string } } = {};

  constructor(private fileService: FileService) {}

  saveYData = (
    xIndex: string,
    yIndex: string,
    xdata: string,
    ydata: string
  ) => {
    this.hasValue = true;
    if (!this.obj[xIndex]) this.obj[xIndex] = { data: xdata };
    const entries = this.obj[xIndex];
    entries[yIndex] = ydata;
    console.log(this.obj);
  };

  saveFinal = () => {
    const finalobj: { [key: string]: string[] } = {};

    for (const [key, value] of Object.entries(this.obj)) {
      const xkeys = "X" + key + "-" + value["data"];
      finalobj[xkeys] = [];
      for (const [k, v] of Object.entries(value)) {
        if (k !== "data") {
          finalobj[xkeys].push(v);
        }
      }
    }
    console.log(JSON.stringify(finalobj));
    this.fileService.saveToFile(finalobj);

    console.log(finalobj);
  };
}
