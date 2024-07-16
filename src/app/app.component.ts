import { Component } from '@angular/core';
import { LoadingService } from './shared/service/loading.service';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nyadero';

  constructor(
    public loadingService: LoadingService,
    public readonly themeService: ThemeService
  ){
    themeService.loadTheme();
  }
  
}
