import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasHojeComponent } from './partidas-hoje.component';

describe('PartidasHojeComponent', () => {
  let component: PartidasHojeComponent;
  let fixture: ComponentFixture<PartidasHojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasHojeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
