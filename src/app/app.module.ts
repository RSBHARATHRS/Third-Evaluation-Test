import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainImageComponent } from './main-image/main-image.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { VideoCoverComponent } from './video-cover/video-cover.component';
import { StudentTestimoialsComponent } from './student-testimoials/student-testimoials.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { FooterComponent } from './footer/footer.component';
import { HelpIconComponent } from './footer/help-icon/help-icon.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { PrepareComponent } from './prepare/prepare.component';
import { ResultComponent } from './result/result.component';
import { FindATestCenterComponent } from './find-a-test-center/find-a-test-center.component';
import { FormsModule } from '@angular/forms';
import { AboutIELTSComponent } from './about-ielts/about-ielts.component';
import { FAQsComponent } from './faqs/faqs.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainImageComponent,
    HomeComponent,
    ErrorComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    VideoCoverComponent,
    StudentTestimoialsComponent,
    ImageGridComponent,
    FooterComponent,
    HelpIconComponent,
    MainFooterComponent,
    FooterBottomComponent,
    PrepareComponent,
    ResultComponent,
    FindATestCenterComponent,
    AboutIELTSComponent,
    FAQsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
