import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { RouterModule } from '@angular/router';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectPageComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectsModule { }
