import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsModule } from '../projects/projects.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ProjectsModule
  ]
})
export class CoreModule { }
