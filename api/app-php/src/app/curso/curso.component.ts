import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //url
 // url = "http://localhost/api/php/";

  //vetor
  vetor!:Curso[];

  //objeto da classe curso
  curso = new Curso();
 

  //construtor
  constructor(private curso_servico:CursoService) { }

  ngOnInit() {
    //ao abrir a aplicacao listar os cursos
    this.selecao();
   
  }

  //Cadastro
  cadastro():void {
    alert("Cadastro");
  }

  //Selecao
  selecao() {
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //Alterar
  alterar():void {
    alert("Alterar");

  }

  //Remover
  remover():void {
    alert("Remover");

  }

}
