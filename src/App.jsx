import React, { useState, useEffect, useCallback } from "react";
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Globe,
} from "lucide-react";
import Profile from "./assets/image/img/profile-photo.jpg";
import Logo from "./assets/image/img/logo.jpg";
import Project1 from "./assets/image/img/countdown.jpeg";
import Project2 from "./assets/image/img/qr-generator.jpeg";
import Project3 from "./assets/image/img/agriconnect-app.png";
import Project4 from "./assets/image/img/agriconnect-landing.png";
import Vroom from "./assets/image/img/vroom.webp";
import Resume from "./assets/resume.pdf";
import emailjs from "emailjs-com";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiDart,
  SiFlutter,
  SiAndroidstudio,
  SiMongodb,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";

const skillIcons = {
  HTML: <SiHtml5 className="skill-icon" />,
  CSS: <SiCss3 className="skill-icon" />,
  JavaScript: <SiJavascript className="skill-icon" />,
  React: <SiReact className="skill-icon" />,
  "Tailwind CSS": <SiTailwindcss className="skill-icon" />,
  PHP: <span className="skill-fallback-icon">PHP</span>,

  Dart: <SiDart className="skill-icon" />,
  Flutter: <SiFlutter className="skill-icon" />,
  "Android Studio": <span className="skill-fallback-icon">AS</span>,

  Firebase: <SiFirebase className="skill-icon" />,
  MySQL: <span className="skill-fallback-icon">SQL</span>,
  MongoDB: <SiMongodb className="skill-icon" />,
  XAMPP: <span className="skill-fallback-icon">X</span>,

 "VS Code": <VscCode className="skill-icon" />,
  Git: <span className="skill-fallback-icon">GIT</span>,
  GitHub: <Github className="skill-icon" />,

  "Functional Testing": <span className="skill-fallback-icon">FT</span>,
  "System Testing": <span className="skill-fallback-icon">ST</span>,
  "Bug Identification": <span className="skill-fallback-icon">BUG</span>,
  Debugging: <span className="skill-fallback-icon">DBG</span>,
  Retesting: <span className="skill-fallback-icon">RT</span>,
  "System Implementation": <span className="skill-fallback-icon">IMP</span>,
  Deployment: <span className="skill-fallback-icon">DEP</span>,
  "Technical Documentation": <span className="skill-fallback-icon">DOC</span>,
};

const SKILL_GROUPS = [
  {
    title: "WEB DEVELOPMENT",
    code: "WEB_01",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "PHP",
    ],
  },
  {
    title: "MOBILE DEVELOPMENT",
    code: "MOB_02",
    skills: [
      "Dart",
      "Flutter",
      "Android Studio",
    ],
  },
  {
    title: "BACKEND & DATABASES",
    code: "DB_03",
    skills: [
      "Firebase",
      "MySQL",
      "MongoDB",
      "XAMPP",
    ],
  },
  {
    title: "TOOLS & WORKFLOW",
    code: "DEV_04",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "TESTING & SOFTWARE",
    code: "QA_05",
    skills: [
      "Functional Testing",
      "System Testing",
      "Bug Identification",
      "Debugging",
      "Retesting",
      "System Implementation",
      "Deployment",
      "Technical Documentation",
    ],
  },
];

const EDUCATION = [
  {
    title: "Bachelor of Science in Information Technology",
    major: "Major in Web and Mobile Technologies",
    institution: "Pangasinan State University - Alaminos City Campus",
    years: "2022 - 2026",
    description:
      "Focused on web and mobile application development, databases, software testing, and system implementation.",
  },
];

const PROJECTS = [
  {
    title: "AgriConnect Mobile Application",
    type: "Academic Project",
    description:
      "A Flutter-based mobile application developed as a capstone project to connect farmers and businesses, supporting product requests, communication, and transactions.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: Project4,
    github:
      "https://github.com/agriconnectpsu-capstone/Team-Collaboration.git",
    website: "https://agriconnect-app-six.vercel.app/",
  },

  {
    title: "VRoom - Car Rental Booking System",
    type: "Academic Project",
    description:
      "A web-based car rental booking system developed to manage vehicle rentals, customer bookings, and related rental transactions.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    image: Vroom,
    github:
      "https://github.com/marcRanielle/VRoom-Car-Rental-Booking-System.git",
    website: "https://vroomrental.vercel.app/",
  },

  {
    title: "Simple QR Code Generator",
    type: "Personal Project",
    description:
      "A web-based QR code generator that allows users to generate scannable codes for URLs, text, and email, enhancing accessibility and sharing.",
    tech: ["React", "Javascript", "CSS", "Tailwind CSS"],
    image: Project2,
    github:
      "https://github.com/marcRanielle/MarcNavy-QR-Generator.git",
    website: "https://marcnavy-qr-generator.vercel.app/",
  },
];

const SectionTitle = ({ children }) => (
  <h2 className="section-title">
    {children}
    <span className="section-title-bg">{children.split(" ")[0]}</span>
  </h2>
);

const IconButton = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
    aria-label={label}
  >
    <Icon className="social-icon" />
  </a>
);

const Navbar = ({ toggleTheme, theme }) => {
  const sections = ["skills", "education", "projects", "contacts"];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo flex items-center gap-2">
          <img src={Logo} alt="Logo" className="" id="logo" />
          <span>M.R</span>
        </div>

        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="nav-item"
            >
              {section}
              <span className="nav-hover-underline"></span>
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-grid">

      {/* LEFT SIDE — INTRODUCTION */}
      <div className="hero-content">

        <div className="hero-status">
          <span className="status-dot"></span>
          SYSTEM STATUS: ONLINE
        </div>

        <p className="hero-kicker">
          // INITIALIZING PORTFOLIO
        </p>

        <h1 className="hero-title">
          MARC RANIELLE
          <span>RABANILLO</span>
        </h1>

        <div className="hero-role">
          <span>&gt;</span> JUNIOR SOFTWARE DEVELOPER
        </div>

        <div className="hero-specialization">
          WEB &amp; MOBILE APPLICATION DEVELOPMENT
        </div>

        <p className="hero-description">
          IT graduate specializing in Web and Mobile Technologies, with
          hands-on experience building applications, working with databases,
          and testing and deploying software systems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">
            <span>&gt;</span>
            VIEW PROJECTS
          </a>

          <a
            href={Resume}
            download="Marc_Ranielle_Rabanillo_Resume.pdf"
            className="hero-btn secondary"
          >
            <Download size={18} />
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/marcRanielle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/marc-ranielle-rabanillo-55b9a5359"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
            LINKEDIN
          </a>
        </div>

      </div>

      {/* RIGHT SIDE — PROFILE TERMINAL */}
      <div className="hero-profile">

        <div className="profile-terminal">

          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>PROFILE.EXE</p>

            <span className="terminal-id">
              001
            </span>
          </div>

          <div className="profile-image-container">
            <img
              src={Profile}
              alt="Marc Ranielle Rabanillo"
              className="hero-img"
            />

            <div className="image-scanline"></div>
          </div>

          <div className="profile-info">
            <div>
              <span>USER</span>
              <strong>M.RABANILLO</strong>
            </div>

            <div>
              <span>FIELD</span>
              <strong>SOFTWARE DEV</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>WEB / MOBILE</strong>
            </div>
          </div>

        </div>

        <p className="hero-outline-text">
          DEVELOPER // 001
        </p>

      </div>

    </div>

    {/* RETRO TECH FOOTER */}
    <div className="hero-system-bar">
      <span>01 // WEB</span>
      <span>02 // MOBILE</span>
      <span>03 // SOFTWARE</span>
      <span>04 // DEVELOPMENT</span>
    </div>

  </section>
);

const About = () => (
  <section id="about" className="about" data-aos="fade-up">
    <div className="container">
      <div className="about-header">
        <p className="about-kicker">// ABOUT_ME.TXT</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-terminal">
        <div className="about-terminal-header">
          <span>ABOUT.EXE</span>
          <span>001</span>
        </div>

        <div className="about-content">
          <div className="about-label">
            <span>USER</span>
            <strong>MARC RANIELLE RABANILLO</strong>
          </div>

          <p>
            I'm a Bachelor of Science in Information Technology graduate
            specializing in Web and Mobile Technologies. I have hands-on
            experience developing web and mobile applications, working with
            databases, and testing, debugging, and deploying software systems.
          </p>

          <p>
            My projects include web applications and a Flutter-based mobile
            application developed as part of my capstone project. I enjoy
            building practical software solutions and continuously improving
            my development skills.
          </p>

          <div className="about-status">
            <span>FIELD</span>
            <strong>WEB / MOBILE / SOFTWARE</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="skills" data-aos="fade-up">
    <div className="container">
      <p className="skills-kicker">// SYSTEM_CAPABILITIES</p>

      <SectionTitle>Skills & Tools</SectionTitle>

      <p className="skills-intro">
        Technologies and software development skills I use for building,
        testing, deploying, and maintaining web and mobile applications.
      </p>

      <div className="skills-groups">
        {SKILL_GROUPS.map((group, index) => (
          <div
            className="skill-group"
            key={group.code}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="skill-group-header">
              <div>
                <span className="skill-group-code">{group.code}</span>
                <h3>{group.title}</h3>
              </div>

              <span className="skill-group-status">READY</span>
            </div>

            <div className="skill-chip-grid">
              {group.skills.map((skill) => (
                <div className="skill-chip" key={skill}>
                  <div className="skill-chip-icon">
                    {skillIcons[skill] || (
                      <span className="skill-fallback-icon">&gt;_</span>
                    )}
                  </div>

                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="experience" data-aos="fade-up">
    <div className="container">
      <p className="experience-kicker">// WORK_HISTORY.LOG</p>

      <SectionTitle>Experience</SectionTitle>

      <div className="experience-card">
        <div className="experience-top">
          <div>
            <p className="experience-type">INTERNSHIP</p>
            <h3 className="experience-title">
              Technical Support
            </h3>
            <p className="experience-company">
              Vertex Technologies Corporation
            </p>
          </div>

          <span className="experience-date">
            FEB 2026 — MAY 2026
          </span>
        </div>

        <div className="experience-line"></div>

        <div className="experience-body">
          <p>
            Gained hands-on experience supporting software implementation,
            deployment, testing, troubleshooting, and post-deployment
            verification across workstations and company devices.
          </p>

          <ul className="experience-list">
            <li>
              Implemented and deployed software systems across workstations
              and devices.
            </li>
            <li>
              Performed system and functional testing, troubleshooting,
              retesting, and post-deployment verification.
            </li>
            <li>
              Configured and deployed applications on tablets and company
              devices.
            </li>
            <li>
              Assisted with system audits and documented implementation and
              troubleshooting activities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="education" data-aos="fade-up">
    <div className="container">
      <SectionTitle>Education</SectionTitle>
      <div className="edu-list">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="edu-card"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger effect for smooth transition
          >
            <div className="edu-header">
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-years">{edu.years}</p>
            </div>
            <p className="edu-major">{edu.major}</p>
            <p className="edu-school">{edu.institution}</p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const featuredProject = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>

        {/* FEATURED PROJECT */}
        <div
          className="project-featured"
          data-aos="fade-up"
        >
          <div className="project-featured-image">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="project-image"
            />
          </div>

          <div className="project-featured-content">
            <p className="project-type">{featuredProject.type}</p>

            <h3 className="project-title">
              {featuredProject.title}
            </h3>

            <p className="project-desc">
              {featuredProject.description}
            </p>

            <div className="project-tags">
              {featuredProject.tech.map((tech, i) => (
                <span key={i} className="project-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={featuredProject.github}
                target="_blank"
                className="icon-btn"
                rel="noopener noreferrer"
              >
                <Github size={18} /> Github
              </a>

              <a
                href={featuredProject.website}
                target="_blank"
                className="icon-btn"
                rel="noopener noreferrer"
              >
                <Globe size={18} /> View
              </a>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className="project-secondary-grid">
          {secondaryProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <p className="project-type">{project.type}</p>

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  className="icon-btn"
                  rel="noopener noreferrer"
                >
                  <Github size={18} /> Github
                </a>

                <a
                  href={project.website}
                  target="_blank"
                  className="icon-btn"
                  rel="noopener noreferrer"
                >
                  <Globe size={18} /> View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hu4hn0z",
        "template_ycek1oy",
        e.target,
        "pYdq0IXEuWM_BRj6X"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contacts" className="contacts" data-aos="fade-up">
      <div className="container">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="contact-center" data-aos="fade-up" data-aos-delay={50}>
          <h3 className="contact-heading">Let's Connect!</h3>
          <p className="contact-desc">
            I'm excited to gain experience and contribute to meaningful
            projects.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              <Mail /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Marc Ranielle. All rights reserved.</p>
      <div className="social-links">
        <IconButton
          Icon={Facebook}
          href="https://www.facebook.com/share/1A25DXb1bt/"
          label="Facebook"
        />
        <IconButton
          Icon={Instagram}
          href="https://www.instagram.com/marc_navy?igsh=MXhvenpzYjJ2a3BkYw=="
          label="Instagram"
        />
        <IconButton
          Icon={Mail}
          href="mailto:rabanillomarc@gmail.com"
          label="Email"
        />
        <IconButton
          Icon={Linkedin}
          href="https://www.linkedin.com/in/marc-ranielle-rabanillo-8a39ab247/"
          label="LinkedIn"
        />
        <IconButton
          Icon={Github}
          href="https://github.com/marcRanielle"
          label="Github"
        />
      </div>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
