import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.css']
})
export class CardOneComponent implements OnInit {

  cardOneImgPath: string;
  cardTwoImgPath: string;
  cardThreeImgPath: string;
  constructor() {
    this.cardOneImgPath = "../../assets/org_img1.png";
    this.cardTwoImgPath = "../../assets/org_img2.png";
    this.cardThreeImgPath = "../../assets/org_img3.png";
  }

  ngOnInit(): void {
  }

}
