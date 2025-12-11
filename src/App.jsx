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
import Profile from "./assets/image/img/profile.png";
import Logo from "./assets/image/img/logo.jpg";
import Project1 from "./assets/image/img/countdown.jpeg";
import Project2 from "./assets/image/img/qr-generator.jpeg";
import Project3 from "./assets/image/img/agriconnect-app.png";
import Project4 from "./assets/image/img/agriconnect-landing.png";
import Resume from "./assets/Resume.pdf";
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
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";

const skillIcons = {
  HTML: <SiHtml5 className="skill-icon" />,
  CSS: <SiCss3 className="skill-icon" />,
  "Tailwind CSS": <SiTailwindcss className="skill-icon" />,
  Javascript: <SiJavascript className="skill-icon" />,
  React: <SiReact className="skill-icon" />,
  Dart: <SiDart className="skill-icon" />,
  Flutter: <SiFlutter className="skill-icon" />,
  Firebase: <SiFirebase className="skill-icon" />,
  "VS Code": <VscCode className="skill-icon" />,
  "Android Studio": <SiAndroidstudio className="skill-icon" />,
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
  "VS Code",
  "Android Studio",
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
    website: "https://marcnavy-countdown.vercel.app/",
  },

  {
    title: "AgriConnect Landing Page",
    description:
      "Part of our capstone project, this landing page was designed for the AgriConnect mobile app to showcase its features and highlight its benefits.",
    tech: ["React", "CSS", "Tailwind CSS", "Javascript"],
    image: Project4,
    github: "https://github.com/marcRanielle/AgriConnect-Landing-Page.git",
    website: "https://agriconnect-app-six.vercel.app/",
  },
  {
    title: "MarcNavy QR Generator",
    description:
      "web-based QR code generator that allows users to generate scannable codes for URLs, text, and email, enhancing accessibility and sharing.",
    tech: ["React", "Javascript", "CSS", "Tailwind CSS"],
    image: Project2,
    github: "https://github.com/marcRanielle/MarcNavy-QR-Generator.git",
    website: "https://marcnavy-qr-generator.vercel.app/",
  },
  {
    title: "AgriConnect Mobile Application",
    description:
      "Developed as a capstone project to directly connect farmers and businesses, facilitating efficient communication and transactions.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: Project3,
    github: "https://github.com/agriconnectpsu-capstone/Team-Collaboration.git",
    website:
      "https://drive.google.com/drive/folders/1IbyScQp6oi4TuyUpdQsj7VB-F_cy9Lxy?fbclid=IwY2xjawOfreFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeDYI2fOLdji69O5kxSuWg9-DJCVcbKeQOKWlZKU6d6c3mEXbQa0qUJPNpVF8_aem_J2EKvahRF_pJpCPW67CepA",
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
          <h2 className="hero-tagline typing">Web and Application Developer</h2>
          <p className="hero-highlight">
            Developing accessible apps for modern web experiences.
          </p>
        </div>
        <a
          href={Resume}
          download="Marc_Ranielle_Rabanillo_Resume.pdf"
          className="hero-btn"
        >
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
  <section id="skills" className="skills" data-aos="fade-up">
    <div className="container">
      <SectionTitle>Skills and Tools</SectionTitle>

      <div className="skill-grid grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex flex-col items-center gap-2 p-4 bg-[#1a1a1a] rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger effect for smooth transition
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
            <p className="edu-school">{edu.institution}</p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>

        {/* GRID 2×2 FIXED */}
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
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
