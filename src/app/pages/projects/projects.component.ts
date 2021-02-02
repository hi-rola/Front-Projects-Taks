import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';
import { CrearProjectComponent } from '../crear-project/crear-project.component';
import { ActualizarProjectComponent } from '../actualizar-project/actualizar-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  listProjects: any[] = [];
  centered = false;

  constructor(private serviceProject: ProjectsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    try {
      this.serviceProject.getProjects().subscribe(
        res => {
          this.listProjects = [...res.data];
        }
      )
    } catch (error) {
    }
  }

  deleteProject(id: any) {
    this.serviceProject.deleteProject(id).subscribe(
      result => {
        this.getProjects();
      }
    )
  }

  mostrarDialogCrearProject() {
    const dialogRef = this.dialog.open(CrearProjectComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.getProjects();
      }
    });
  }

  mostrarDialogActualizarProject(id: number) {
    const dialogRef = this.dialog.open(ActualizarProjectComponent, {
      width: '600px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.getProjects();
      }
    });
  }
}