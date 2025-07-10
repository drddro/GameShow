import { Injectable } from '@angular/core';
import {PngFile} from '../models/PngFile';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  pngs: Map<number, PngFile> = new Map<number, PngFile>();
  counter = 0

  storeFile(file: File){
    const url = URL.createObjectURL(file);
    const png: PngFile = {
      id: this.counter++,
      url: url,
      name: file.name
    }
    this.pngs.set(png.id, png);
  }

  getPngs(): PngFile[] {
    return Array.from(this.pngs.values());
  }
}
