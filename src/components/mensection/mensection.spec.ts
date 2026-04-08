import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensection } from './mensection';

describe('Mensection', () => {
  let component: Mensection;
  let fixture: ComponentFixture<Mensection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mensection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
