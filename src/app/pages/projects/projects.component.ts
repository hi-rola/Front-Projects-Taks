import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';
import { CrearProjectComponent } from '../crear-project/crear-project.component';
import { ActualizarProjectComponent } from '../actualizar-project/actualizar-project.component';
import { Project } from 'src/app/models/Projects';
import { MsjEliminarProjectComponent } from '../../shared/mensajes-confirmacion/msj-eliminar-project/msj-eliminar-project.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  listProjects: Project[] = [];
  centered = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private serviceProject: ProjectsService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    try {
      this.serviceProject.getProjects().subscribe(
        result => {
          this.listProjects = [...result.data];
        }
      )
    } catch (error) {
    }
  }

  deleteProject(project: Project) {
    const dialogRef = this.dialog.open(MsjEliminarProjectComponent, {
      width: '450px',
      data: { name: project.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.serviceProject.deleteProject(project.id).subscribe(
          result => {
            this.getProjects();
          }
        );
        this._snackBar.open('Proyecto eliminado exitosamente', '', {
          duration: 1500,
          panelClass: 'error-alert-snackbar',
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  mostrarDialogCrearProject() {
    const dialogRef = this.dialog.open(CrearProjectComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.getProjects();
        this._snackBar.open('Proyecto registrado exitosamente', '', {
          duration: 1500,
          panelClass: 'error-alert-snackbar',
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  mostrarDialogActualizarProject(project: Project) {
    const dialogRef = this.dialog.open(ActualizarProjectComponent, {
      width: '600px',
      data: { id: project.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
        this.getProjects();
        this._snackBar.open('Proyecto actualizado exitosamente', '', {
          duration: 1500,
          panelClass: 'error-alert-snackbar',
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }
}