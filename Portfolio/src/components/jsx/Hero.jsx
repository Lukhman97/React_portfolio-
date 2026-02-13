import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hi, I'm Lukhman 👋</h1>
          <h2>Python Full Stack Developer | Django | React</h2>


          <p>
            I develop scalable web applications using Django and React,
            build REST APIs, and design responsive user interfaces.
            Passionate about backend architecture, databases, and clean code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" className="btn-secondary">Download Resume</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
