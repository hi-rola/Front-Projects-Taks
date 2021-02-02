import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProjectComponent } from './crear-project.component';

describe('CrearProjectComponent', () => {
  let component: CrearProjectComponent;
  let fixture: ComponentFixture<CrearProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
