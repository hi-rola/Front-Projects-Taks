import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  listProjects: any[] = [];
  varibale = 'border-top: 1px solid';
  centered = false;

  constructor(private serviceProject: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.serviceProject.getProjects().subscribe(
      res =>{
        this.listProjects = [...res.data];
      }
    )
  }

  hola(){

  }

}
