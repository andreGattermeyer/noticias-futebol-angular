import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatosDestaqueComponent } from './campeonatos-destaque.component';

describe('CampeonatosDestaqueComponent', () => {
  let component: CampeonatosDestaqueComponent;
  let fixture: ComponentFixture<CampeonatosDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampeonatosDestaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonatosDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
