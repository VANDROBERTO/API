<?php

//incluir a conecao
include("conexao.php");

//sql
$sql = "SELECT * FROM cursos";

//executar
$executar = mysqli_query($conexao,$sql);

//vetor
$cursos = [];

//indice
$indice = 0;

//laco
while($linha = mysqli_fetch_assoc($executar)) {
    $cursos[$indice]['idCursos'] = $linha['idCursos'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;

}

//JSON
json_encode(['cursos'=>$cursos]);
//var_dump($cursos);
?>