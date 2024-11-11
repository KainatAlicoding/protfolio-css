// pages/index.js
import Head from 'next/head';
import styles from '@/app/Styles/Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.container}>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="Personal Portfolio Website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="home" className={styles.home}>
      <div className={styles.homeContent}>
        <div className={styles.homeText}>
          <h1><b>Welcome to My Portfolio,</b></h1>
          <p>Passionate web developer creating engaging digital experiences.</p>
        </div>
        <div className={styles.homeImage}>
          <img src="home.webp" alt="Home Image" />
        </div>
      </div>
    </section>

    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <img src="about.webp" alt="About Me" />
        </div>
        <div className={styles.aboutText}>
          <h2><b>About Me</b></h2>
          <p>Experienced in web development, focusing on frontend technologies like React and Next.js. Dedicated to delivering high-quality, responsive web solutions.</p>
        </div>
      </div>
    </section>

    <section id="services" className={styles.services}>
      <h2><b>Services</b></h2>
      <div className={styles.serviceCards}>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <p>Building responsive and high-performance websites.</p>
        </div>
        <div className={styles.card}>
          <h3>Responsive Design</h3>
          <p>Ensuring seamless experiences across devices.</p>
        </div>
        <div className={styles.card}>
          <h3>UI/UX Design</h3>
          <p>Designing user-centered interfaces that engage and delight.</p>
        </div>
        <div className={styles.card}>
          <h3>SEO Optimization</h3>
          <p>Improving search engine rankings to boost visibility.</p>
        </div>
      </div>
    </section>

    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <footer className={styles.footer}>
      <p>© 2024 Your Name. All rights reserved.</p>
    </footer>
  </div>
  );
}
