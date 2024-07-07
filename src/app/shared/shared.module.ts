import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NodataComponent } from './components/nodata/nodata.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    NodataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NodataComponent
  ]
})
export class SharedModule { }
