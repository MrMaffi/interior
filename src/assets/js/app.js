import barba from '@barba/core';

import { pageTrasitionTl, loadTl } from './components/anim';

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

function delay(n = 2000) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: 'default-transition',
      async leave() {
        const done = this.async();

        pageTrasitionTl();
        await delay(2400);
        done();
      },
      async enter({ next }) {
        loadTl(next.container);
      },
      async once({ next }) {
        loadTl(next.container);
      },
    },
  ],
});
