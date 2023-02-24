const filterElementsByName = document.querySelector('form input');
const cards = document.querySelectorAll('.cards .card');

filterElementsByName.addEventListener('input', filterCardsByName);

function filterCardsByName() {
  if (filterElementsByName.value != '') {
    for (let card of cards) {
      let title = card.querySelector('h3');
      title = title.textContent.toLowerCase();

      let filterText = filterElementsByName.value.toLowerCase();

      console.log(title);

      if (!title.includes(filterText)) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = 'block';
    }
  }
}

const selectCity = document.getElementById('city');

selectCity.addEventListener('change', filterCardsByCity);

function filterCardsByCity() {
  const selectedCity = selectCity.value;
  const elements = document.querySelectorAll('.card-city');

  for (const element of elements) {
    if (element.classList.contains(selectedCity)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  if (selectedCity == 'city') {
    for (const element of elements) {
      element.style.display = 'block';
    }
  }
}

const btnGrid = document.querySelector('.primary');
const btnList = document.querySelector('.secondary');
const cardsContainer = document.querySelector('.cards');
const listContainer = document.querySelector('.lists');

btnGrid.addEventListener('click', () => {
  btnGrid.classList.add('active');
  btnList.classList.remove('active');
  cardsContainer.classList.add('grid-view');
  listContainer.classList.add('list-view');
})

btnList.addEventListener('click', () => {
  btnList.classList.add('active');
  btnGrid.classList.remove('active');
  listContainer.classList.add('list-view');
  cardsContainer.classList.remove('grid-view');
})
