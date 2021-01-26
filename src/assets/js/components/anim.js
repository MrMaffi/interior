import Splitting from 'splitting';
import anime from 'animejs/lib/anime.es.js';

export function loadTl(container) {
  const target = container.querySelector('.title');
  Splitting({ target });

  anime
    .timeline()
    .add({
      targets: target.querySelectorAll('.char'),
      scale: [4, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add(
      {
        targets: '.intro_img-container',
        clipPath: 'inset(0% 0% 0% 0%)',
        easing: 'easeInQuad',
        duration: 1000,
      },
      500
    )
    .add(
      {
        targets: '.intro_img-container img',
        scale: [2, 1],
        easing: 'easeInQuad',
        duration: 1000,
      },
      500
    );
}

export function pageTrasitionTl() {
  anime
    .timeline({
      targets: '.transition li',
      easing: 'easeOutSine',
      duration: 500,
      delay: anime.stagger(200),
    })
    .add({
      scaleY: [0, 1],
      endDelay: 1000,
    })
    .add({
      scaleY: [1, 0],
    });
}
