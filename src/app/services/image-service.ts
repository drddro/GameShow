import { Injectable } from '@angular/core';
import { ImgFile } from '../models/imgFile';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgs: Map<number, ImgFile> = new Map<number, ImgFile>();
  counter = 0

  storeFile(file: File){
    const url = URL.createObjectURL(file);
    const img: ImgFile = {
      id: this.counter++,
      url: url,
      name: file.name
    }
    this.imgs.set(img.id, img);
  }

  getImgs(): ImgFile[] {
    return Array.from(this.imgs.values());
  }

  getImgById(id: number): ImgFile | undefined {
    return this.imgs.get(id);
  }

  getImgByName(name: string): ImgFile | undefined {
    console.log(name);
    console.log(this.imgs);
    for (const img of this.imgs.values()) {
      if (img.name === name) {
        return img;
      }
    }
    return undefined;
  }
}
