import './App.css';
import { profile, about, experience, projects, quantum, contact } from './content.js';

// Shows your picture, or a blank labeled box if no picture is set yet.
function Pic({ src, label, className = '' }) {
  return (
    <div className={`pic ${className}`}>
      {src ? <img src={src} alt={label} /> : <span>+ {label}</span>}
      <i className="corner tl" /><i className="corner tr" />
      <i className="corner bl" /><i className="corner br" />
    </div>
  );
}

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <span className="mono">{num} /</span>
      <h2>{title}</h2>
      <div className="rule" />
    </div>
  );
}

function ProjectCard({ p, accent }) {
  return (
    <article className={`card project ${accent}`}>
      <Pic src={p.image} label="project photo" />
      <div className="card-body">
        <span className="tag mono">{p.tag}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        {p.link && (
          <a className="link mono" href={p.link} target="_blank" rel="noreferrer">
            view project &rarr;
          </a>
        )}
      </div>
    </article>
  );
}

function Hero() {
  // The rolling ring shows every project + quantum project. Padded to 8 cards minimum.
  const all = [...projects, ...quantum];
  const items = [...all];
  while (items.length < 8) items.push({ title: 'Your Project', tag: 'coming soon', image: '' });

  const n = items.length;
  const cardW = 190;
  const radius = Math.round(cardW / 2 / Math.tan(Math.PI / n)) + 50;
  const colors = ['pink', 'yellow', 'blue', 'lavender', 'mint'];

  return (
    <section id="home" className="hero">
      <div className="gear-bg" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          <circle className="teeth" cx="200" cy="200" r="170" />
          <circle className="ring-line" cx="200" cy="200" r="150" />
          <circle className="ring-line dash" cx="200" cy="200" r="110" />
          <circle className="ring-line" cx="200" cy="200" r="40" />
          <g className="spokes">
            {[0, 45, 90, 135].map((a) => (
              <line key={a} x1="200" y1="30" x2="200" y2="370" transform={`rotate(${a} 200 200)`} />
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-text">
        <p className="mono eyebrow">&lt; portfolio v1.0 /&gt;</p>
        <h1>Hello, I'm {profile.name}<span className="dot">.</span></h1>
        <p className="sub">{profile.tagline}</p>
      </div>

      <div className="scene">
        <div className="ring" style={{ '--n': n }}>
          {items.map((it, i) => (
            <div
              key={i}
              className={`slot ${colors[i % colors.length]}`}
              style={{ transform: `rotateY(${(360 / n) * i}deg) translateZ(${radius}px)`, width: cardW }}
            >
              <div className="slot-img">
                {it.image ? <img src={it.image} alt={it.title} /> : <span>photo</span>}
              </div>
              <div className="slot-label">
                <b>{it.title}</b>
                <small className="mono">{it.tag}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll mono">scroll &darr;</a>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a href="#home" className="logo">ANAYA<span>.</span></a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#quantum">Quantum</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <Hero />

      <section id="about" className="section">
        <SectionHead num="01" title="About" />
        <div className="about-grid">
          <Pic src={profile.photo} label="your photo" className="portrait" />
          <div className="about-text">
            {about.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <SectionHead num="02" title="Engineering Experience" />
        <div className="timeline">
          {experience.map((e, i) => (
            <article key={i} className="card exp">
              <span className="tag mono">{e.dates}</span>
              <h3>{e.role}</h3>
              <h4 className="mono">{e.place}</h4>
              <p>{e.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHead num="03" title="Engineering Projects" />
        <div className="grid">
          {projects.map((p, i) => <ProjectCard key={i} p={p} accent="pinkcard" />)}
        </div>
      </section>

      <section id="quantum" className="section">
        <SectionHead num="04" title="Quantum Projects" />
        <div className="grid">
          {quantum.map((p, i) => <ProjectCard key={i} p={p} accent="lavcard" />)}
        </div>
      </section>

      <section id="contact" className="section">
        <SectionHead num="05" title="Contact" />
        <div className="card contact">
          <p>{contact.blurb}</p>
          <div className="contact-links">
            <a className="btn" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="btn alt" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn alt2" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer mono">designed &amp; built by {profile.name} &middot; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
