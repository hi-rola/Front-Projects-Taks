import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from '../models/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL_BACKEND = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any>{
    return this.http.get(this.URL_BACKEND + '/projects');
  }

  getProjectById(id: any){
    return this.http.get(this.URL_BACKEND + '/projects/' + id);
  }

  crearNuevoProyecto(nuevoProyecto: Project): Observable<any>{
    return this.http.post(this.URL_BACKEND + '/projects/', nuevoProyecto);
  }

  deleteProject(id: any): Observable <any>{
    return this.http.delete(this.URL_BACKEND + '/projects/' + id);
  }

  updateProject(id: any, informacionProject: Project): Observable <any> {
    return this.http.put(this.URL_BACKEND + '/projects/' + id , informacionProject);
  }

}