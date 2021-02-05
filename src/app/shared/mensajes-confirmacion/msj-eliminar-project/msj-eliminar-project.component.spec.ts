import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEliminarProjectComponent } from './msj-eliminar-project.component';

describe('MsjEliminarProjectComponent', () => {
  let component: MsjEliminarProjectComponent;
  let fixture: ComponentFixture<MsjEliminarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjEliminarProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEliminarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
