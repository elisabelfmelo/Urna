/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function clicou(botao) {

   //Meu elemento
  let opcao1 = document.getElementById("opcao1");
  let opcao2 = document.getElementById("opcao2");

  //Valor atual dele
  let valorAtualOp1 = opcao1.innerHTML;
  let valorAtualOp2 = opcao2.innerHTML;

  if (valorAtualOp1.length + valorAtualOp2.length == 2) {

   return false;

  } else if (valorAtualOp1.length == 1) {

   //Novo valor
   opcao2.innerHTML = botao;

  } else {

   //Novo valor
   opcao1.innerHTML = botao;

  }

}