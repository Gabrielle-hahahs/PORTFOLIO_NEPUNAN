import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, Check, Code2,
  Download, Github, GraduationCap, Heart, Instagram, Laptop, Menu,
  Send, Sparkles, X, BriefcaseBusiness, ChevronDown, ExternalLink
} from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'WEB DEVELOPMENT',
    title: 'To-Do List',
    description: 'A to-do list web app for organizing tasks and keeping track of what needs to be done.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'project-mint',
    icon: '✓',
    url: 'https://nepunan-to-do-list.netlify.app/',
    details: 'A task-list website published on Netlify. It is included here as one of my web development projects.',
  },
  {
    number: '02',
    category: 'WEB DEVELOPMENT',
    title: 'Calculator',
    description: 'A calculator web app for performing basic arithmetic calculations through a simple interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'project-lime',
    icon: '＋',
    url: 'https://nepunan-calculatorr.netlify.app/',
    details: 'A calculator website published on Netlify. Open the live project to try the calculator interface.',
  },
]

const skills = [
  { name: 'HTML', level: 'Learning', width: '72%' },
  { name: 'CSS', level: 'Learning', width: '68%' },
  { name: 'Python', level: 'Learning', width: '55%' },
  { name: 'Java', level: 'Learning', width: '50%' },
  { name: 'ReactJS', level: 'Learning', width: '48%' },
]

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <div className="heading-row">
        <h2>{title}</h2>
        {note && <p className="heading-note">{note}</p>}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const navItems = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Go to homepage" onClick={closeMenu}>
          <span className="brand-mark">g<span>.</span></span>
          <span className="brand-name">Gabrielle's Portfolio</span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> STUDENT · ALWAYS LEARNING</div>
            <h1>Hi, I'm<br /><span className="serif-accent">Gabrielle.</span></h1>
            <p className="hero-description">
              I'm a 3rd-year BS Information Technology student at Cavite State University – Tanza Campus, learning to build useful websites and applications.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a>
            </div>
            <div className="hero-footnote"><Sparkles size={15} /> Currently learning React, one component at a time.</div>
          </div>
          <div className="hero-art" aria-label="Decorative portfolio illustration">
            <div className="art-backdrop" />
            <div className="art-sticker sticker-top"><Sparkles size={18} /><span>curious<br />by nature</span></div>
            <div className="profile-card">
              <div className="profile-card-top"><span className="tiny-dot" /><span className="tiny-dot" /><span className="tiny-dot" /><span className="card-label">HELLO, WORLD!</span></div>
              <div className="portrait-placeholder">
                <div className="portrait-sun" />
                <div className="portrait-plant plant-one">✳</div>
                <div className="portrait-plant plant-two">✦</div>
                <div className="portrait-person"><div className="person-hair" /><div className="person-face"><span className="person-eye eye-one" /><span className="person-eye eye-two" /><span className="person-smile" /></div><div className="person-shirt" /></div>
                <span className="portrait-caption">a little creativity goes a long way</span>
              </div>
              <div className="profile-card-bottom"><span>DESIGN · CODE · REPEAT</span><span>✳ 2026</span></div>
            </div>
            <div className="art-sticker sticker-bottom"><span className="sticker-big">✳</span><span>made with<br />a curious mind</span></div>
            <div className="floating-note">keep growing <span>↗</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-strip-inner">
            <span>GOOD IDEAS START SMALL</span>
            <div className="strip-line" />
            <p>Learning today. Building for tomorrow. <span>✳</span></p>
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <SectionHeading eyebrow="A LITTLE INTRODUCTION" title={<>Curious mind,<br /><span className="serif-accent">practical heart.</span></>} note="A few things that make me, me." />
          <div className="about-grid">
            <div className="about-story">
              <p className="lead-copy">I'm an Information Technology student who enjoys figuring out how digital things work—and how to make them easier for people to use.</p>
              <p>I'm still growing my skills, but every class, project, and little experiment teaches me something new. I believe good work comes from staying curious, asking questions, and being willing to try again.</p>
              <div className="quote-card"><span className="quote-mark">“</span><p>Make it useful. Make it thoughtful. Keep it human.</p><span className="quote-doodle">✳</span></div>
            </div>
            <div className="about-facts">
              <div className="fact-card">
                <div className="fact-icon"><GraduationCap size={21} /></div>
                <div><span className="fact-label">WHAT I'M DOING</span><h3>Studying IT</h3><p>Building a foundation in programming, systems, and web development.</p></div>
              </div>
              <div className="fact-card">
                <div className="fact-icon"><Heart size={21} /></div>
                <div><span className="fact-label">WHAT I ENJOY</span><h3>Creating & exploring</h3><p>Clean interfaces, creative ideas, music, and learning by doing.</p></div>
              </div>
              <div className="fact-card">
                <div className="fact-icon"><Laptop size={21} /></div>
                <div><span className="fact-label">MY APPROACH</span><h3>One step at a time</h3><p>Start with the basics, stay consistent, and improve with every project.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <SectionHeading eyebrow="THINGS I'VE WORKED ON" title={<>Little projects,<br /><span className="serif-accent">big lessons.</span></>} note="A selection of practice work and ideas." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.accent}`}>
                  <div className="project-visual-top"><span>PROJECT / {project.number}</span><span className="visual-arrow">↗</span></div>
                  <div className="project-symbol">{project.icon}</div>
                  <div className="visual-bottom-label">{project.category}</div>
                </div>
                <div className="project-info">
                  <div className="project-title-row"><h3>{project.title}</h3><span className="project-number">{project.number}</span></div>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <button className="project-link" onClick={() => setActiveProject(project)}>View project details <ArrowUpRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
          
        </section>

        <section className="skills-band">
          <div className="section-wrap skills-inner">
            <div className="skills-intro">
              <p className="eyebrow"><span className="eyebrow-dot" /> MY TOOLKIT</p>
              <h2>Learning is<br /><span className="serif-accent">the whole point.</span></h2>
              <p>I'm building my skills with practice, patience, and a willingness to learn something new.</p>
              <button className="button button-outline" onClick={() => setShowAllSkills(!showAllSkills)}>
                {showAllSkills ? 'Show less' : 'See my toolkit'} <ChevronDown className={showAllSkills ? 'rotate-icon' : ''} size={16} />
              </button>
            </div>
            <div className="skills-list">
              {skills.slice(0, showAllSkills ? skills.length : 3).map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-meta"><span>{skill.name}</span><span>{skill.level}</span></div>
                  <div className="skill-track"><span style={{ width: skill.width }} /></div>
                </div>
              ))}
              {showAllSkills && <div className="extra-skill"><Code2 size={17} /><span>Also exploring: Git, responsive design, and basic database concepts.</span></div>}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section resume-section" id="resume">
          <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning by <span className="serif-accent">doing.</span></>} note="My education, experience, and growing skill set." />
          <div className="resume-layout">
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">CURRENT</span>
                <div className="timeline-marker"><GraduationCap size={17} /></div>
                <div className="timeline-content"><span className="timeline-type">EDUCATION</span><h3>Bachelor's Degree in Information Technology</h3><p>Cavite State University – Tanza Campus</p><span className="timeline-caption">Learning programming, systems, and emerging technologies.</span></div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">ONGOING</span>
                <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
                <div className="timeline-content"><span className="timeline-type">PROJECT EXPERIENCE</span><h3>Academic & Personal Projects</h3><p>Coursework, interface experiments, and system proposals.</p><span className="timeline-caption">Turning classroom concepts into practical work.</span></div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">NEXT UP</span>
                <div className="timeline-marker"><Sparkles size={17} /></div>
                <div className="timeline-content"><span className="timeline-type">GOAL</span><h3>Keep building and improving</h3><p>Grow as a developer and collaborate on meaningful projects.</p><span className="timeline-caption">Open to opportunities to learn and contribute.</span></div>
              </div>
            </div>
            <aside className="resume-card">
              <div className="resume-card-icon"><Download size={23} /></div>
              <span className="fact-label">A QUICK INTRO ON PAPER</span>
              <h3>My resume</h3>
              <p>Add your real education, experience, and contact details, then attach your own PDF resume here.</p>
              <a
  className="button button-dark resume-download"
  href="public/White and Black Simple Student CV Resume_20261012_015125_0000.pdf"
  target="_blank"
  rel="noreferrer"
>
  View My Resume <ArrowUpRight size={16} />
</a>
              <div className="resume-card-footer"><span>UPDATED 2026</span><span>✳</span></div>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> SAY HELLO</p>
              <h2>Have an idea?<br /><span className="serif-accent">Let's make it happen.</span></h2>
              <p>Have a question, want to collaborate, or just want to say hi? Send a message. I'd love to hear from you.</p>
              <a className="contact-email" href="mailto:nepunanpaula@gmail.com"><AtSign size={18} /> nepunanpaula@gmail.com <ArrowUpRight size={16} /></a>
              <div className="social-links">
                <a href="https://github.com/" target="https://github.com/Gabrielle-hahahs" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://www.instagram.com/" target="https://www.instagram.com/gavv.rrr?vrfl=d2oybmN0cm4wa3E=" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="mailto:nepunanpaula@gmail.com" aria-label="Email"><AtSign size={18} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>DROP A NOTE</span><Send size={17} /></div>
              {sent && <div className="success-message"><Check size={17} /> Thanks! The demo form validated your message. Connect a form service to receive messages.</div>}
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="What should I call you?" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="nepunanpaula@gmail.com" required />
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me what's on your mind..." rows="4" required />
              <button className="button button-dark send-button" type="submit">Send a message <ArrowUpRight size={16} /></button>
              <p className="form-footnote">Demo interaction · No message is sent to a server yet.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a href="#home" className="brand footer-brand"><span className="brand-mark">g<span>.</span></span><span className="brand-name">made with curiosity</span></a>
          <p>Designed & built with care <span>✳</span> © 2026</p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button>
            <p className="eyebrow"><span className="eyebrow-dot" /> PROJECT / {activeProject.number}</p>
            <div className={`modal-art ${activeProject.accent}`}>{activeProject.icon}</div>
            <span className="timeline-type">{activeProject.category}</span>
            <h2 id="modal-title">{activeProject.title}</h2>
            <p className="modal-description">{activeProject.details}</p>
            <div className="tag-list">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {activeProject.url && <a className="button button-dark modal-done" href={activeProject.url} target="_blank" rel="noreferrer">Open live project <ExternalLink size={16} /></a>}
            <button className="button button-dark modal-done" onClick={() => setActiveProject(null)}>Close <Check size={16} /></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
