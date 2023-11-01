import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchLocationsMapComponent } from './church-locations-map.component';

describe('ChurchLocationsMapComponent', () => {
  let component: ChurchLocationsMapComponent;
  let fixture: ComponentFixture<ChurchLocationsMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChurchLocationsMapComponent]
    });
    fixture = TestBed.createComponent(ChurchLocationsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
