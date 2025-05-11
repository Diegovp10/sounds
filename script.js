const sounds = [
  "Alarma",
  "Cheers",
  "Aplausos",
  "Bong",
  "Boom",
  "Let Me Know",
  "Okey Let's Go",
  "Rizz",
  "Tambores"
];

const buttonContainer = document.getElementById('buttons-container');

sounds.forEach(name => {
  const button = document.createElement('button');
  button.textContent = name;

  button.addEventListener('click', () => {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
  });

  buttonContainer.appendChild(button);
});
