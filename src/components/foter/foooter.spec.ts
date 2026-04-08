import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foooter } from './foooter';

describe('Foooter', () => {
  let component: Foooter;
  let fixture: ComponentFixture<Foooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
