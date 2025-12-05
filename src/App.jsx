import React, { useState, useEffect, useCallback } from "react";
import {
  Moon,
  Sun,
  Code,
  GraduationCap,
  Briefcase,
  Mail,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Globe,
} from "lucide-react";
import Profile from "./assets/image/img/profile.jpg";
import Logo from "./assets/image/img/logo.jpg";
import Project1 from "./assets/image/img/countdown.jpeg";
import Project2 from "./assets/image/img/qr-generator.jpeg";
import Project3 from "./assets/image/img/agriconnect-app.png";
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
} from "react-icons/si";

const skillIcons = {
  "HTML": <SiHtml5 className="skill-icon" />,
  "CSS": <SiCss3 className="skill-icon" />,
  "Tailwind CSS": <SiTailwindcss className="skill-icon" />,
  "Javascript": <SiJavascript className="skill-icon" />,
  "React": <SiReact className="skill-icon" />,
  "Dart": <SiDart className="skill-icon" />,
  "Flutter": <SiFlutter className="skill-icon" />,
  "Firebase": <SiFirebase className="skill-icon" />,
};

const SKILLS = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Javascript",
  "React",
  "Dart",
  "Flutter",
  "Firebase",
];

const EDUCATION = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "Pangasinan State University - Alaminos City Campus",
    years: "2022 - 2026",
    description:
      "Building Foundational Skills in Web Development and Database Management.",
  },
];

const PROJECTS = [
  {
    title: "MarcNavy Countdown",
    description:
      "A web-based timer designed to track and count down to exciting events and special occasions.",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
    image: Project1,
    github: "https://github.com/marcRanielle/MarcNavy-Countdown.git",
    website: "marcnavy-countdown.vercel.app",
  },
  {
    title: "MarcNavy QR Generator",
    description:
      "Designed for simplicity and modern data sharing. Created with a balance of creativity and technical precision.",
    tech: ["React", "Javascript", "CSS", "Tailwind CSS"],
    image: Project2,
    github: "https://github.com/marcRanielle/MarcNavy-QR-Generator.git",
    website: "marcnavy-qr-gen.vercel.app",
  },
  {
    title: "AgriConnect Mobile Application",
    description:
      "A mobile app linking farmers and businesses in Western Pangasinan.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: Project3,
    github: "https://github.com/agriconnectpsu-capstone/Team-Collaboration.git",
    website: "https://drive.google.com/drive/folders/1IbyScQp6oi4TuyUpdQsj7VB-F_cy9Lxy?fbclid=IwY2xjawOfreFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeDYI2fOLdji69O5kxSuWg9-DJCVcbKeQOKWlZKU6d6c3mEXbQa0qUJPNpVF8_aem_J2EKvahRF_pJpCPW67CepA",
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
      <div>
        <h1 className="hero-title">
          Marc Ranielle <br /> Rabanillo
        </h1>
        <div className="hero-sub">
          <h2 className="hero-tagline">Web Developer</h2>
          <p className="hero-highlight">
            Developing accessible apps for modern web experiences.
          </p>
        </div>
        <a href="/resume.pdf" download className="hero-btn">
          Download My Resume <Download className="hero-btn-icon" />
        </a>
      </div>
      <div className="hero-img-wrapper">
        <div className="hero-img-bg"></div>
        <img src={Profile} alt="Developer" className="hero-img" />

        <p className="hero-outline-text">DEVELOPER</p>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <SectionTitle>Skills and Tools</SectionTitle>

      <div className="skill-grid grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex flex-col items-center gap-2 p-4 bg-[#1a1a1a] rounded-lg shadow-md"
          >
            {skillIcons[skill]}
            <p className="skill-text text-center">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="education">
    <div className="container">
      <SectionTitle>Education</SectionTitle>
      <div className="edu-list">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-header">
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-years">{edu.years}</p>
            </div>
            <p className="edu-school">{edu.institution}</p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openImage = (src) => setPreviewImage(src);
  const closeImage = () => setPreviewImage(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>

        {previewImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            <img
              src={previewImage}
              alt="Preview"
              id="previewImage"
              className=""
            />
          </div>
        )}

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image cursor-pointer"
                onClick={() => openImage(project.image)}
              />

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

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
                  rel="noopener noreferrer"
                  className="icon-btn flex items-center gap-2 underline-none decoration-none"
                >
                  <Github size={18} />
                  <span>View GitHub</span>
                </a>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn flex items-center gap-2 underline-none decoration-none"
                >
                  <Globe size={18} />
                  <span>View</span>
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
    <section id="contacts" className="contacts">
      <div className="container">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="contact-center">
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
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
