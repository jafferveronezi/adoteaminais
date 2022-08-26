import { Injectable } from '@angular/core';
import { AnimaisModel } from './animais.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private animaisData!: AnimaisModel;
  constructor() { }

  setAnimaisData(animaisData: AnimaisModel) {
    this.animaisData = animaisData;
  }
  getAnimaisData() {
    return this.animaisData;
  }
}
