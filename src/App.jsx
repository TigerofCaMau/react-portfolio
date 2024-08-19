import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

import projects from "./data/projects.json";
import skills from "./data/skills.json";

import React from "react";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default App;
