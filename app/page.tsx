import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  IconArrowUpRight,
  IconFileText,
  IconGithub,
  IconGlobe,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconScholar,
  IconTwitter,
} from "@/components/icons";
import {
  awards,
  education,
  experience,
  focusAreas,
  navLinks,
  profile,
  projects,
  publications,
  service,
  stats,
} from "@/lib/content";

const socials = [
  { label: "GitHub", href: profile.githubUrl, Icon: IconGithub },
  { label: "LinkedIn", href: profile.linkedinUrl, Icon: IconLinkedin },
  { label: "Scholar", href: profile.scholarUrl, Icon: IconScholar },
  { label: "Twitter", href: profile.twitterUrl, Icon: IconTwitter },
  { label: "Instagram", href: profile.instagramUrl, Icon: IconInstagram },
  { label: "Website", href: profile.homepageUrl, Icon: IconGlobe },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container">
            <div className="hero__grid">
              <div>
                <p className="hero__eyebrow">
                  Machine Learning Engineer &middot; Johns Hopkins &middot; LLNL
                </p>
                <h1 className="hero__name">
                  Kumar <span>Miskin</span>
                </h1>
                <p className="hero__subtitle">
                  PhD candidate in Materials Science &amp; Engineering
                </p>
                <p className="hero__summary">
                  {profile.summary}
                </p>
                <div className="hero__ctas">
                  <a
                    className="btn btn--primary"
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconFileText size={16} /> View CV
                  </a>
                  <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                    <IconMail size={16} /> Get in touch
                  </a>
                </div>
                <div className="hero__socials">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      className="social-link"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={15} /> {label}
                    </a>
                  ))}
                </div>
              </div>

              <Reveal className="hero__portrait" delay={120}>
                <div className="hero__portrait-glow" aria-hidden="true" />
                <div className="hero__portrait-frame">
                  <Image
                    src="/portrait.jpg"
                    alt="Portrait of Kumar Miskin"
                    width={1200}
                    height={1600}
                    priority
                    sizes="(max-width: 860px) 320px, 380px"
                  />
                </div>
              </Reveal>
            </div>

            <div className="hero__stats">
              <Reveal delay={200}>
                <div className="hero__stats-grid">
                  {stats.map((s) => (
                    <div className="stat" key={s.label}>
                      <div className="stat__value">{s.value}</div>
                      <div className="stat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <span className="section__eyebrow">01 &middot; About</span>
                <h2 className="section__title">Bridging ML and materials</h2>
              </Reveal>
            </div>

            <div className="about__grid">
              <Reveal className="about__text">
                <p>
                  I&apos;m a Machine Learning Engineer and PhD candidate in
                  Materials Science &amp; Engineering at{" "}
                  <strong>Johns Hopkins University</strong>, advised by Prof.
                  Paulette Clancy, graduating December 2026. My work sits at the
                  intersection of machine learning and physical simulation —
                  building systems that learn from atomistic data to accelerate
                  scientific discovery.
                </p>
                <p>
                  My research has taken me from a{" "}
                  <strong>U.S. DOE national laboratory</strong> (Lawrence
                  Livermore) to global industry (Sony, Tata Power) and academic
                  groups across three continents. Along the way I&apos;ve shipped
                  production ML systems for computer vision, audio, and
                  autonomous material discovery — and co-authored four
                  peer-reviewed papers on physics-informed ML and materials.
                </p>
                <p>
                  Beyond the lab, I mentor students, teach graduate courses, and
                  build full-stack AI products end-to-end.
                </p>
              </Reveal>

              <div>
                <Reveal className="about__focus" delay={80}>
                  <h3>Focus areas</h3>
                  <div className="chips">
                    {focusAreas.map((area) => (
                      <span className="chip" key={area}>
                        {area}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal className="about__education" delay={140}>
                  <h3>Education</h3>
                  {education.map((e) => (
                    <div className="education-card" key={e.degree}>
                      <div className="education-card__degree">{e.degree}</div>
                      <div className="education-card__org">{e.org}</div>
                      <div className="education-card__detail">{e.detail}</div>
                      <div className="education-card__period">{e.period}</div>
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>

            <Reveal className="awards" delay={80}>
              <h3>Honors &amp; Fellowships</h3>
              <div className="awards__list">
                {awards.map((a) => (
                  <div className="award" key={a.title}>
                    <span className="award__year">{a.year}</span>
                    <div>
                      <div className="award__title">{a.title}</div>
                      <span className="award__org">{a.org}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section id="publications" className="section section--alt">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <span className="section__eyebrow">02 &middot; Publications</span>
                <h2 className="section__title">Selected research</h2>
                <p className="section__lede">
                  Four peer-reviewed papers spanning materials discovery,
                  perovskite defect physics, and ML frameworks — with more in
                  the pipeline.
                </p>
              </Reveal>
            </div>

            <div className="pubs__list">
              {publications.map((pub, i) => (
                <Reveal key={pub.title} delay={Math.min(i * 40, 160)}>
                  <article className="pub">
                    <span className="pub__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pub__body">
                      <h3 className="pub__title">{pub.title}</h3>
                      <p className="pub__meta">
                        {pub.authors} &middot;{" "}
                        <span className="pub__venue">
                          {pub.venue}, {pub.year}
                        </span>
                      </p>
                      <div className="pub__badges">
                        {pub.firstAuthor && <span className="badge">First author</span>}
                        {pub.status && (
                          <span className="badge badge--outline">{pub.status}</span>
                        )}
                        {pub.links.map((l) => (
                          <a
                            key={l.label}
                            className="pub__link"
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {l.label} <IconArrowUpRight size={13} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="pubs__footer">
              <p>
                Full list and citations on{" "}
                <a
                  href={profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <span className="section__eyebrow">03 &middot; Experience</span>
                <h2 className="section__title">Research &amp; industry</h2>
              </Reveal>
            </div>

            <div className="timeline">
              {experience.map((exp, i) => (
                <Reveal key={exp.org + exp.role} delay={Math.min(i * 40, 160)}>
                  <article
                    className={`timeline__item ${
                      exp.current ? "timeline__item--current" : ""
                    }`}
                  >
                    <div className="timeline__meta">
                      <span className="timeline__period">{exp.period}</span>
                      <div className="timeline__org">{exp.org}</div>
                      {exp.location && (
                        <div className="timeline__location">{exp.location}</div>
                      )}
                    </div>
                    <div className="timeline__content">
                      <h3 className="timeline__role">{exp.role}</h3>
                      <ul className="timeline__bullets">
                        {exp.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="service-block">
              <h3>Teaching, Mentoring &amp; Service</h3>
              <ul>
                {service.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="section section--alt">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <span className="section__eyebrow">04 &middot; Projects</span>
                <h2 className="section__title">Building things</h2>
                <p className="section__lede">
                  From physics-informed ML frameworks to full-stack AI products
                  — a few things I&apos;ve built.
                </p>
              </Reveal>
            </div>

            {projects.map((p) => (
              <Reveal key={p.name}>
                <article className="project">
                  <div>
                    <h3 className="project__name">{p.name}</h3>
                    <p className="project__tagline">{p.tagline}</p>
                    <ul className="project__bullets">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <a
                      className="btn btn--ghost"
                      href={p.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site <IconArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal className="pubs__footer">
              <p>
                More experiments and side projects on{" "}
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section contact">
          <div className="container">
            <Reveal>
              <span className="section__eyebrow">05 &middot; Contact</span>
              <h2 className="contact__headline">Let&apos;s talk</h2>
              <p className="contact__lede">
                Open to research collaborations, ML &amp; scientific computing
                roles, and interesting problems at the intersection of
                machine learning and science.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="contact__ctas">
                <a
                  className="btn btn--primary"
                  href={`mailto:${profile.email}`}
                >
                  <IconMail size={16} /> {profile.email}
                </a>
                <a
                  className="btn btn--ghost"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconFileText size={16} /> Download CV
                </a>
              </div>

              <div className="contact__details">
                <span className="social-link">
                  <IconPhone size={15} /> {profile.phone}
                </span>
                <span className="social-link">
                  <IconGlobe size={15} /> {profile.location}
                </span>
              </div>

              <div className="hero__socials" style={{ justifyContent: "center" }}>
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    className="social-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <p className="footer__made">
            Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>{" "}
            &middot; {navLinks.map((l) => l.href.replace("#", "").toUpperCase()).join(" / ")}
          </p>
        </div>
      </footer>
    </>
  );
}
