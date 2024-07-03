const container1 = document.getElementsByClassName('icones');
console.log(container1)
const container2 = document.getElementsByClassName('form-login');
const botao = document.getElementById('meuBotao');

function Troca(event) {
  if (container1[0].style.display === 'flex') {
    container1[0].style.display = 'none';
    container2[0].style.display = 'flex';
  } else {
    container1[0].style.display = 'flex';
    container2[0].style.display = 'none';
  }
};