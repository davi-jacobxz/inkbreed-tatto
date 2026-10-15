'use client';
import { useEffect } from 'react';

// Animações globais: aparecer ao rolar, números subindo, barra de progresso, brilho do mouse
export default function Effects() {
  useEffect(() => {
    const all = (s) => [...document.querySelectorAll(s)];

    const rv = all('.rv');
    rv.forEach((el, i) => { el.style.transitionDelay = (i % 5) * 90 + 'ms'; });
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      setTimeout(() => { e.target.style.transitionDelay = ''; }, 1000);
      io.unobserve(e.target);
    }), { threshold: 0.15 });
    rv.forEach((el) => io.observe(el));

    const cu = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      cu.unobserve(e.target);
      const el = e.target, n = +el.dataset.n, s = el.dataset.s || '', t0 = performance.now();
      const f = (t) => {
        const p = Math.min((t - t0) / 2200, 1);
        el.textContent = Math.round(n * (1 - Math.pow(1 - p, 4))).toLocaleString('pt-BR') + s;
        if (p < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }), { threshold: 0.6 });
    all('[data-n]').forEach((el) => cu.observe(el));

    const pg = document.getElementById('pg');
    const onScroll = () => {
      if (pg) pg.style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`;
    };
    addEventListener('scroll', onScroll, { passive: true });

    const hero = document.querySelector('.hero');
    const art = document.querySelector('.art-h');
    const onMove = (e) => {
      const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      hero.style.setProperty('--mx', x + 'px');
      hero.style.setProperty('--my', y + 'px');
      if (art) art.style.transform = `translate(${(x / r.width - 0.5) * -26}px,${(y / r.height - 0.5) * -26}px)`;
    };
    if (hero) hero.addEventListener('pointermove', onMove);

    // clicar num card de estilo filtra o portfólio
    const onClick = (e) => {
      const c = e.target.closest && e.target.closest('.cat[data-style]');
      if (c) dispatchEvent(new CustomEvent('inkbreed:filter', { detail: c.dataset.style }));
    };
    document.addEventListener('click', onClick);

    return () => {
      io.disconnect(); cu.disconnect();
      removeEventListener('scroll', onScroll);
      if (hero) hero.removeEventListener('pointermove', onMove);
      document.removeEventListener('click', onClick);
    };
  }, []);
  return null;
}
