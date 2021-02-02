import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-crear-project',
  templateUrl: './crear-project.component.html',
  styleUrls: ['./crear-project.component.scss']
})
export class CrearProjectComponent implements OnInit {

  formNuevoProject = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
    deliverydate: [''],
  });

  constructor(private fb: FormBuilder, private serviceProject: ProjectsService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  get form(): any {
    return this.formNuevoProject?.controls;
  }

  crearProyecto() {
    if (this.formNuevoProject.valid) {
      this.formNuevoProject.get('deliverydate')?.setValue(new Date());
      let nuevoProyecto = this.formNuevoProject.value;
      this.serviceProject.crearNuevoProyecto(nuevoProyecto).subscribe(
        result => {
          console.log(result);
        }
      )
    }
  }

}