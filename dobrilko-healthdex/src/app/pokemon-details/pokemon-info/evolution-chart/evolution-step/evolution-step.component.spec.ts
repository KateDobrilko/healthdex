import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionStepComponent } from './evolution-step.component';

describe('EvolutionStepComponent', () => {
  let component: EvolutionStepComponent;
  let fixture: ComponentFixture<EvolutionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
