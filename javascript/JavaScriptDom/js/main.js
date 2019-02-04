'use strict';

// コメント (command + / :ショートカット)
{
  const a = document.querySelector('a');
  const span = document.querySelector('span');

  a.addEventListener('click', e => {
    e.preventDefault();
    a.classList.add('hidden');
    span.classList.remove('hidden');
  });
}
