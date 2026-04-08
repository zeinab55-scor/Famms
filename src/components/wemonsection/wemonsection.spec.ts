import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wemonsection } from './wemonsection';

describe('Wemonsection', () => {
  let component: Wemonsection;
  let fixture: ComponentFixture<Wemonsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wemonsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wemonsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
