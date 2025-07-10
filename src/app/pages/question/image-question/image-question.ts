import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../services/image-service';
import {PngFile} from '../../../models/PngFile';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-image-question',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-question.html',
  styleUrl: './image-question.css'
})
export class ImageQuestion implements OnInit{
  images: PngFile[] = []
  constructor(protected pngService: ImageService){

  }

  ngOnInit(): void {
    this.images = this.pngService.getPngs();
    }
}
