import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  videoSectionContent: string;
  cardTreeContent: string;
  imageGridCOntent: string;

  constructor() {
    this.videoSectionContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nunc proin aliquam sit libero pretium. Massa elementum diam malesuada fusce sed mi ornare ullamcorper sit. Cursus vestibulum facilisis sem dui, sed sit rutrum in ut.";
    this.cardTreeContent = "This is a brief description to give users context to the website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, id preti";
    this.imageGridCOntent = "Lorem Ipsum is simply dummy text of the printing and industry printing and typesetting industry printing and typesetting industry."
  }


}
