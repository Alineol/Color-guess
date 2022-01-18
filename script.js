const bolas = document.querySelectorAll('.ball');
const rgbNumbers = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const btnReset = document.querySelector('#reset-game');
function pegarRGB() {
  const i = Math.floor(Math.random() * 5);
  const rgb = bolas[i].style.backgroundColor;
  rgbNumbers.innerText = rgb;
}
function gerarCor() {
  for (let i = 0; i < bolas.length; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const corRGB = `rgb(${r},${g},${b})`;
    bolas[i].style.backgroundColor = corRGB;
  }
  pegarRGB();
}
window.onload = gerarCor();
function verificaResp(event) {
  const selecionado = event.target.style.backgroundColor;
  if (selecionado === rgbNumbers.innerText) {
    resposta.innerText = 'Acertou!';
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}
for (let i = 0; i < bolas.length; i += 1) {
  bolas[i].addEventListener('click', verificaResp);
}
function resetarGame() {
  gerarCor();
  resposta.innerText = 'Escolha uma cor';
}
btnReset.addEventListener('click', resetarGame);
