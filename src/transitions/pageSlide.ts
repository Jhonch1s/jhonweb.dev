import type { TransitionDirectionalAnimations } from 'astro:transitions';

const motion = { duration: '220ms', easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fillMode: 'both' };

// La raíz captura sólo el viewport; animar el main completo de la portada
// capturaba varios miles de píxeles y dejaba un fotograma vacío.
export const pageSlide: TransitionDirectionalAnimations = {
  forwards: {
    old: { name: 'pageSlideToLeft', ...motion },
    new: { name: 'pageSlideFromRight', ...motion },
  },
  backwards: {
    old: { name: 'pageSlideToRight', ...motion },
    new: { name: 'pageSlideFromLeft', ...motion },
  },
};
