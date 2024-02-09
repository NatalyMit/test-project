const containerMuscles = document.querySelector('.exercises-nav-list');
const listImagesEl = document.querySelector('.exercises-container');
const imageEl = document.querySelector('.exercise-card');
const listExercisesEl = document.querySelector('.exercises-gallery');

const BASE_URL = `https://energyflow.b.goit.study/api/`;
const hiddenClass = 'is-hidden';

listImagesEl.addEventListener('click', handleContainerMuscles);
listImagesEl.classList.remove(hiddenClass);
getExercises('Muscles').then(renderExerciseCards);

async function handleContainerMuscles(evt) {
  console.log(evt.target);
  const { filter } = evt.target.dataset;

  if (!filter) return;

  await getExercises(filter).then(renderExerciseCards);
  listImagesEl.classList.add(hiddenClass);
}

async function getExercises(filter) {
  return fetch(`${BASE_URL}exercises?filter=${filter}&page=1&limit=12`)
    .then(resp => resp.json())
    .then(data => data.results);
}
function renderExerciseCards(exercises) {
  listExercisesEl.innerHTML = exercises.map(createExerciseCard).join('');
}

function createExerciseCard({
  bodyPart,
  target,
  name,
  burnedCalories,
  rating,
  time,
}) {
  return `<li class = "list-exercises"><div class="options">
          <p class="options-item"> WORKOUT</p>
          <span class="options-item-span">${rating}</span>
          <button type = "button" >START</button>
          <p class="options-item"> <span class="options-item-span">svg</span>${name}</p>
          <p class="options-item"> Burned calories:${burnedCalories}/${time}</p>
          <p class="options-item">Body part:${bodyPart}</p>
          <p>Target:${target}</p></div>
          </li>`;
}
