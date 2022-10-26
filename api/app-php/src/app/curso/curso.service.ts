import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  //url = "http://localhost/api/php/";
  url = "http://localhost:8080/api/php";

  //Vetor
  vetor!:Curso[];

  //contructor
  constructor(private http:HttpClient  ) { }

  //obter todos os cursos
  obterCursos():Observable<Curso[]> {
    return this.http.get<Curso>(this.url+ "listar").pipe(
      map((res: any) => {
        this.vetor = res['cursos'];        
        return this.vetor;
      })
    )
  }

}
