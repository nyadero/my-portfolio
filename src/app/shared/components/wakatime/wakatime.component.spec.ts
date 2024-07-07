import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakatimeComponent } from './wakatime.component';

describe('WakatimeComponent', () => {
  let component: WakatimeComponent;
  let fixture: ComponentFixture<WakatimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WakatimeComponent]
    });
    fixture = TestBed.createComponent(WakatimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
