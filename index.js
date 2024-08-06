const process = document.querySelectorAll('.process .processbar');
const totalBars = process.length;
const animationDuration = 2000; // Duração total da animação de uma barra 2s
const nextBarDelay = 1500;
let currentBar = 0;

setInterval(() => {
  const bar = process[currentBar];
  bar.classList.add('anima');

  // Calcula o tempo para iniciar a próxima animação
  const nextBarDelay = animationDuration / 2; // Metade da duração da animação

  // Remove a classe 'anima' após a animação terminar
  setTimeout(() => {
    bar.classList.remove('anima');
    currentBar = (currentBar + 1) % totalBars; // Incrementa o índice da próxima barra, circular
  }, animationDuration);

}, nextBarDelay);
