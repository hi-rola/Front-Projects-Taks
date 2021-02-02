import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-actualizar-project',
  templateUrl: './actualizar-project.component.html',
  styleUrls: ['./actualizar-project.component.scss']
})
export class ActualizarProjectComponent implements OnInit {

  formActualizarProject = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
    deliverydate: [''],
  });

  project: any;

  constructor(private fb: FormBuilder, private serviceProject: ProjectsService, public dialogRef: MatDialogRef<ActualizarProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
      result =>{

      }
    )
  }

}