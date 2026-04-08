import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testminiol } from './testminiol';

describe('Testminiol', () => {
  let component: Testminiol;
  let fixture: ComponentFixture<Testminiol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testminiol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testminiol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
