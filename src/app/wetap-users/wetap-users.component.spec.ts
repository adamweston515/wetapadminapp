import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetapUsersComponent } from './wetap-users.component';

describe('WetapUsersComponent', () => {
  let component: WetapUsersComponent;
  let fixture: ComponentFixture<WetapUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetapUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetapUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
