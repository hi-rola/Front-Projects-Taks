import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/Projects';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-crear-project',
  templateUrl: './crear-project.component.html',
  styleUrls: ['./crear-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CrearProjectComponent implements OnInit {

  formNuevoProject = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
    deliverydate: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private serviceProject: ProjectsService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  get form(): any {
    return this.formNuevoProject?.controls;
  }

  crearProyecto() {
    if (this.formNuevoProject.valid) {
      let nuevoProyecto: Project = this.formNuevoProject.value;
      this.serviceProject.crearNuevoProyecto(nuevoProyecto).subscribe(
        result => {
        }
      )
    }
  }
}