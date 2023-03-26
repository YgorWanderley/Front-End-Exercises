const buttonDog = document.querySelector('#dog');
const buttonCat = document.querySelector('#cat');
const buttonSurprise = document.querySelector('#surprise');
const petImage = document.querySelector('#image');

buttonDog.addEventListener('click', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();

  petImage.src = data.message;
});

buttonCat.addEventListener('click', async () => {
  const response = await fetch('https://aws.random.cat/meow');
  const data = await response.json();

  petImage.src = data.file;
});

buttonSurprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petUrl = data.message || data.file;

      petImage.src = petUrl;
    });
});
