const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const count = document.querySelector('#count');

function updateCount() {
  const left = list.querySelectorAll('li:not(.done)').length;
  count.textContent = `${left}개 남음`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (text === '') {
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.textContent = text;
  button.textContent = '삭제';
  button.classList.add('delete');

  li.append(span, button);
  list.append(li);

  input.value = '';
  updateCount();
});

list.addEventListener('click', (event) => {

  if (event.target.matches('span')) {
    const li = event.target.closest('li');
    li.classList.toggle('done');
    updateCount();
  }

  if (event.target.matches('.delete')) {
    const li = event.target.closest('li');
    li.remove();
    updateCount();
  }

});