import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { WakatimeComponent } from './components/wakatime/wakatime.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    WakatimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WakatimeComponent
  ]
})
export class SharedModule { }
