import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/programmer.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/journey.png")} alt="Journey icon" />
            <div className={styles.aboutItemText}>
              <h3>My Journey</h3>
              <p>
                I'm a self-taught frontend developer with experience in building
                responsive and optimized websites. I've navigated my way through
                various challenges and conquered new concepts to reach where I
                am today.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/skills.png")} alt="Skills icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills and Technologies</h3>
              <p>
                I specialize in HTML, CSS, and JavaScript, and I'm proficient in
                using frameworks like React to build responsive and dynamic user
                interfaces. I thrive on continuously expanding my knowledge base
                and staying ahead of industry trends.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/vision.png")} alt="Vision icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion and Vision</h3>
              <p>
                I am deeply passionate about crafting seamless and visually
                stunning interfaces. My goal is to contribute to the
                ever-evolving world of web development by creating engaging and
                intuitive digital experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
