'use client';
import { useState } from 'react';

const LINKS = [
  ['#inicio', 'Início'], ['#estudio', 'Estúdio'], ['#categorias', 'Estilos'],
  ['#artistas', 'Artistas'], ['#portfolio', 'Portfólio'], ['#contato', 'Contato'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="pg" />
      <header>
        <div className="w nav">
          <a className="logo" href="#inicio"><i />INKBREED</a>
          <nav className={open ? 'on' : ''} onClick={() => setOpen(false)}>
            <ul>{LINKS.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </nav>
          <a className="btn" href="#contato" style={{ padding: '11px 20px', fontSize: 14 }}>Agendar horário</a>
          <button className="menu" aria-label="Abrir menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </header>
    </>
  );
}
