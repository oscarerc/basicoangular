import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursowebComponent } from './cursoweb.component';

describe('CursowebComponent', () => {
  let component: CursowebComponent;
  let fixture: ComponentFixture<CursowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
