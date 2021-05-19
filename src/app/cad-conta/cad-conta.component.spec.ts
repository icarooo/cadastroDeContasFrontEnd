import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadContaComponent } from './cad-conta.component';

describe('CadContaComponent', () => {
  let component: CadContaComponent;
  let fixture: ComponentFixture<CadContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
