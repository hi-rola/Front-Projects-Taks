import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-actualizar-project',
  templateUrl: './actualizar-project.component.html',
  styleUrls: ['./actualizar-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})

export class ActualizarProjectComponent implements OnInit {

  formActualizarProject = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
    deliverydate: ['', Validators.required]
  });

  project: any;

  constructor(private fb: FormBuilder, private serviceProject: ProjectsService, public dialogRef: MatDialogRef<ActualizarProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _adapter: DateAdapter<any>, public dialog: MatDialog) { }

  ngOnInit(): void {
    let idProject = this.data.id;
    this.serviceProject.getProjectById(idProject).subscribe(
      result => {
        this.project = result;
        this.formActualizarProject.get('name')?.setValue(this.project.name);
        this.formActualizarProject.get('priority')?.setValue(this.project.priority);
        this.formActualizarProject.get('description')?.setValue(this.project.description);
        this.formActualizarProject.get('deliverydate')?.setValue(this.project.deliverydate);
      }
    );
  }

  get form(): any {
    return this.formActualizarProject?.controls;
  }

  actualizarProject() {
    let id = this.data.id;
    let informacionProject = this.formActualizarProject.value;
    this.serviceProject.updateProject(id, informacionProject).subscribe(
      result => {
      }
    );
  }
}