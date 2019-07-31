import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherDataComponent } from './show-weather-data.component';

describe('ShowWeatherDataComponent', () => {
  let component: ShowWeatherDataComponent;
  let fixture: ComponentFixture<ShowWeatherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWeatherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
