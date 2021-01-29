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

}
