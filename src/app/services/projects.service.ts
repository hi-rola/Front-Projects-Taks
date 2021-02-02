import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL_BACKEND = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any>{
    return this.http.get(this.URL_BACKEND + '/projects');
  }

  crearNuevoProyecto(nuevoProyecto: any): Observable<any>{
    return this.http.post(this.URL_BACKEND + '/projects/', nuevoProyecto);
  }

  deleteProject(id: any): Observable <any>{
    return this.http.delete(this.URL_BACKEND + '/projects/' + id);
  }

}
