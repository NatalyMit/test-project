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

function createExerciseCard({
  bodyPart,
  target,
  name,
  burnedCalories,
  rating,
  time,
}) {
  return `<li class = "list-exercises" data-filter="${name}"><div class="options">
  <div class="box-up">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><span class="options-item-span">${rating}</span><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div>
  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <p class="options-item"> <span class="options-item-span">svg</span>${name}</p>
            <p class="options-item"> Burned calories:${burnedCalories}/${time}</p>
            <p class="options-item">Body part:${bodyPart}</p>
            <p>Target:${target}</p></div>
            </li>`;
}

function renderExerciseCards(exercises) {
  listExercisesEl.innerHTML = exercises.map(createExerciseCard).join('');
}
