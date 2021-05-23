import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosintensivosComponent } from './cursosintensivos.component';

describe('CursosintensivosComponent', () => {
  let component: CursosintensivosComponent;
  let fixture: ComponentFixture<CursosintensivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosintensivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosintensivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
