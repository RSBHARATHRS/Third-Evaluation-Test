import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgPathService {

  cardThreeImgPaths: any;
  cardTwoImgPaths: any;
  constructor() {
    this.cardTwoImgPaths = {
      mainImgPath: "../../assets/fea_image.png"
    }
    this.cardThreeImgPaths = {
      mainImgPath: "../../assets/Image.jpg"
    }
  }

  //will return path for card two images
  getCardTwoImgPaths() {
    return this.cardTwoImgPaths;
  }

  //will return path for card three images
  getCardThreeImgPaths() {
    return this.cardThreeImgPaths;
  }
}
