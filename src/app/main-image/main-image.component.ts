import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {
  homePannerImgPath: string;
  constructor() {
    this.homePannerImgPath="../../assets/home_banner.jpg"
  }

  ngOnInit(): void {
  }

}
