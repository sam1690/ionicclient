import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardPage } from './userdashboard.page';

describe('UserdashboardPage', () => {
  let component: UserdashboardPage;
  let fixture: ComponentFixture<UserdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
