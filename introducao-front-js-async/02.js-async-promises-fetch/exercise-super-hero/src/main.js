import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const nameP = document.querySelector('#name');
const button = document.querySelector('#button');

const acessToken = '5913721805410973';
const baseUrl = `https://superheroapi.com/api.php/${acessToken}`;

const maxHeroes = 1000;

const randomId = () => Math.floor(Math.random() * maxHeroes);

button.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = randomId();

  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    img.src = data.image.url;
    nameP.innerHTML = data.name;
  } catch (error) {
    Swal.fire({
      title: 'Hero not found',
      text: 'procure outro',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
    console.log(error);
  }
});
