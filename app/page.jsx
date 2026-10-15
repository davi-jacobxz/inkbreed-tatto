import { Fragment } from 'react';
import Header from '../components/Header';
import Effects from '../components/Effects';
import Portfolio from '../components/Portfolio';
import { SITE, FEATURES, STYLES, ARTISTS, TESTIMONIALS } from '../data/site';

const wa = `https://wa.me/${SITE.whatsapp}`;
const marquee = Array.from({ length: 4 }).flatMap(() => STYLES.map((s) => s.name));

export default function Home() {
  return (
    <>
      <Effects />
      <Header />
      <main>
        <div className="hero" id="inicio">
          <div className="w">
            <div>
              <h1>
                <span className="ln"><i>Mais que tattoo.</i></span>
                <span className="ln o"><i>É arte na pele.</i></span>
              </h1>
              <p>O Inkbreed é um estúdio onde cada traço conta uma história. Trabalhamos com técnica, respeito e atenção à sua ideia.</p>
              <div className="bt">
                <a className="btn" href="#contato">Agendar sua tattoo</a>
                <a className="btn g" href="#portfolio">Ver portfólio</a>
              </div>
            </div>
            <div className="art-h">
              <div className="ring" />
              <img src="/img/emblema.png" alt="Emblema do estúdio Inkbreed" />
            </div>
          </div>
          <div className="mq" aria-hidden="true">
            <div>{marquee.map((t, i) => <Fragment key={i}><span>{t}</span><span>✦</span></Fragment>)}</div>
          </div>
        </div>

        <div className="w">
          <div className="fe">
            {FEATURES.map((f) => (
              <div key={f.title} className="rv">
                <span className="fe-icon" aria-hidden="true">
                  {f.icon === 'shield' && <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>}
                  {f.icon === 'award' && <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" /><path d="m10 8 1.3 1.3L14.5 6" /></svg>}
                  {f.icon === 'message' && <svg viewBox="0 0 24 24" fill="none"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.4-3.2A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8.5 11.5h7M12 8v7" /></svg>}
                  {f.icon === 'heart' && <svg viewBox="0 0 24 24" fill="none"><path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" /><path d="M8.5 11.5h7" /></svg>}
                </span>
                <b>{f.title}</b><small>{f.text}</small>
              </div>
            ))}
          </div>
        </div>

        <section id="categorias">
          <div className="w">
            <div className="sh rv"><h2>Estilos</h2><p>Do realismo ao minimalismo, temos o estilo perfeito para você.</p></div>
            <div className="cats">
              {STYLES.map((s) => (
                <a key={s.name} className="cat rv" href="#portfolio" data-style={s.name}>
                  <div className="tile"><img src={s.img} alt={s.alt} loading="lazy" /></div>
                  <div className="b"><h3>{s.name}</h3><p>{s.text}</p><span>Ver trabalhos →</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="estudio">
          <div className="w">
            <div className="ab">
              <div className="rv">
                <h2>Sobre o estúdio</h2>
                <p>O Inkbreed nasceu da paixão pela tatuagem e da vontade de criar um espaço onde arte, liberdade e autenticidade se encontram. Aqui, cada cliente é único e cada tattoo é feita com dedicação, técnica e respeito.</p>
                <a className="btn g" href="#artistas">Conheça os artistas</a>
              </div>
              <div className="st rv">
                {SITE.stats.map((s) => (
                  <div key={s.label}><b data-n={s.n} data-s={s.s}>0</b><small>{s.label}</small></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="artistas">
          <div className="w">
            <div className="sh rv"><h2>Nossos artistas</h2><p>Os profissionais que transformam ideias em arte.</p></div>
            <div className="ar">
              {ARTISTS.map((a) => (
                <div key={a.name} className="ac rv">
                  <div className="ph" style={{ '--h': a.tone }}>
                    <img src={a.img} alt={`${a.name}, tatuador`} style={{ objectPosition: `50% ${a.pos}` }} loading="lazy" />
                  </div>
                  <div className="b">
                    <h3>{a.name}</h3><p>{a.styles}</p>
                    <a href={SITE.instagramUrl}>Instagram</a> · <a href={wa}>WhatsApp</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />

        <section>
          <div className="w">
            <div className="sh rv"><h2>Depoimentos</h2><p>Quem vive, recomenda.</p></div>
            <div className="dp">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="rv"><span className="s">★★★★★</span><p>{t.text}</p><b>{t.name}</b></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato">
          <div className="w">
            <div className="cta">
              <div className="rv">
                <h2>Vamos tatuar sua ideia?</h2>
                <p>Entre em contato e agende seu horário. Estamos prontos para transformar sua ideia em arte.</p>
                <a className="btn" href={wa}>Falar no WhatsApp</a>
              </div>
              <ul className="rv">
                <li><b>Telefone</b>{SITE.phone}</li>
                <li><b>Instagram</b>{SITE.instagram}</li>
                <li><b>Endereço</b>{SITE.address}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="w">
          <div className="fi">
            <a className="logo" href="#inicio"><i />INKBREED</a>
            <ul>
              <li><a href="#inicio">Início</a></li><li><a href="#categorias">Estilos</a></li>
              <li><a href="#artistas">Artistas</a></li><li><a href="#portfolio">Portfólio</a></li><li><a href="#contato">Contato</a></li>
            </ul>
            <ul>
              <li><a href={SITE.instagramUrl}>Instagram</a></li><li><a href="#">TikTok</a></li><li><a href="#">YouTube</a></li>
            </ul>
          </div>
          <p className="cp">© 2026 Inkbreed Tattoo Studio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
