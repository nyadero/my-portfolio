// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme!: 'dark' | 'light';

  constructor() {
    this.loadTheme();
  }

  loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    this._currentTheme = theme as 'dark' | 'light';
    document.documentElement.classList.add(theme);
  }

  toggleDarkMode() {
    if (this._currentTheme === 'dark') {
      this._currentTheme = 'light';
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      this._currentTheme = 'dark';
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  get currentTheme() {
    return this._currentTheme;
  }
}
