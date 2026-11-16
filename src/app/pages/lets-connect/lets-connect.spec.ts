import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsConnect } from './lets-connect';

describe('LetsConnect', () => {
  let component: LetsConnect;
  let fixture: ComponentFixture<LetsConnect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsConnect],
    }).compileComponents();

    fixture = TestBed.createComponent(LetsConnect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
