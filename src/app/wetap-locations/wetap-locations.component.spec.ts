import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetapLocationsComponent } from './wetap-locations.component';

describe('WetapLocationsComponent', () => {
  let component: WetapLocationsComponent;
  let fixture: ComponentFixture<WetapLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetapLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetapLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
