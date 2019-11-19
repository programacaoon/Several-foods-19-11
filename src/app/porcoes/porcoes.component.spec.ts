import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcoesComponent } from './porcoes.component';

describe('PorcoesComponent', () => {
  let component: PorcoesComponent;
  let fixture: ComponentFixture<PorcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
