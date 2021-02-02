import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';
import { CrearProjectComponent } from '../crear-project/crear-project.component';

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


  deleteProject(id: any) {
    this.serviceProject.deleteProject(id).subscribe(
      result => {
        this.getProjects();
      }
    )
  }


}
