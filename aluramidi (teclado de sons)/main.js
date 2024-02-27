function tocaSom(SeletorAudio) {
  const elemento = document.querySelector(SeletorAudio);

  if (elemento === null) {
    alert('Elemento não encontrado')
  }
  if (elemento && elemento.localName === 'audio') {

    elemento.play();
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido')
  }

}

var ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  // Template string
  const idAudio = `#som_${instrumento}`;

  console.log(idAudio);
  tecla.onclick = function () {
    tocaSom(idAudio);

  };
  tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
