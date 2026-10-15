'use client';
import { useEffect, useState } from 'react';
import { STYLES, PORTFOLIO } from '../data/site';

const byName = Object.fromEntries(STYLES.map((s) => [s.name, s]));

export default function Portfolio() {
  const [cur, setCur] = useState('Todas');
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onFilter = (e) => setCur(e.detail);
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    addEventListener('inkbreed:filter', onFilter);
    addEventListener('keydown', onKey);
    return () => { removeEventListener('inkbreed:filter', onFilter); removeEventListener('keydown', onKey); };
  }, []);

  const items = PORTFOLIO.map((style, i) => ({ style, i })).filter((o) => cur === 'Todas' || o.style === cur);

  const tilt = (e) => {
    const t = e.currentTarget, r = t.getBoundingClientRect();
    t.style.transform = `perspective(600px) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 14}deg) rotateX(${-((e.clientY - r.top) / r.height - 0.5) * 14}deg) translateY(-4px)`;
  };
  const reset = (e) => { e.currentTarget.style.transform = ''; };

  return (
    <section id="portfolio">
      <div className="w">
        <div className="sh rv"><h2>Portfólio</h2><p>Cada tatuagem é uma nova história.</p></div>
        <div className="chips rv">
          {['Todas', ...STYLES.map((s) => s.name)].map((c) => (
            <button key={c} className={c === cur ? 'on' : ''} onClick={() => setCur(c)}>{c}</button>
          ))}
        </div>
        <div className="pf">
          {items.map(({ style, i }) => {
            const s = byName[style];
            return (
              <div key={cur + i} className="tile" tabIndex={0} role="button" aria-label={`Ampliar ${style}`}
                onClick={() => setOpen(s)} onKeyDown={(e) => e.key === 'Enter' && setOpen(s)}
                onPointerMove={tilt} onPointerLeave={reset}>
                <img src={s.img} alt={s.alt} loading="lazy" />
                <em>{style}</em>
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <div id="lb" className="on" role="dialog" aria-label="Imagem ampliada" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button aria-label="Fechar" onClick={() => setOpen(null)}>✕</button>
          <div className="tile"><img src={open.img} alt={open.alt} /></div>
        </div>
      )}
    </section>
  );
}
