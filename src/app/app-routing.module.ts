import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutIELTSComponent } from './about-ielts/about-ielts.component';
import { ErrorComponent } from './error/error.component';
import { FAQsComponent } from './faqs/faqs.component';
import { FindATestCenterComponent } from './find-a-test-center/find-a-test-center.component';
import { HomeComponent } from './home/home.component';
import { PrepareComponent } from './prepare/prepare.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "about",
    children: [
      {
        path: "about-IELTS",
        component:AboutIELTSComponent
      },
      {
        path: "FAQs",
        component:FAQsComponent
      }
    ]
  },
  {
    path: "prepare",
    component:PrepareComponent
  },
  {
    path: "result",
    component:ResultComponent
  },
  {
    path: "find-a-test-centers",
    component:FindATestCenterComponent
  },
  {
    path: "error",
    component:ErrorComponent
  },
  {
    path: "**",
    redirectTo: "error",
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
