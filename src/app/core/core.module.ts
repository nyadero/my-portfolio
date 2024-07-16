import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsModule } from '../projects/projects.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationComponent } from './components/certification/certification.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CarouselComponent,
    ExperienceComponent,
    CertificationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ProjectsModule
  ]
})
export class CoreModule { }
