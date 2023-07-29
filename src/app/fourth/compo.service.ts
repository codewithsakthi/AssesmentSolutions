import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompoService {
  sharedValue: string = '';
  constructor() { }
}
