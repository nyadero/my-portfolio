import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouterModule } from '@angular/router';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectsModule { }
