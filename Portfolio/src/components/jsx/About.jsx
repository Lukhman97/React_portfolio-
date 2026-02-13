import "../css/About.css";
import profile from "../../assets/profile.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Lukhman Profile" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm <strong>Lukhman</strong>, a motivated and enthusiastic 
            <strong> Python Full Stack Developer & Data Analyst</strong>. 
            As a fresher, I am passionate about building scalable web 
            applications and analyzing data to generate meaningful insights.
          </p>

          <p>
            I have hands-on experience in developing web applications 
            using Django for backend development and React for frontend 
            interfaces. I enjoy working with REST APIs, authentication 
            systems, and database-driven applications.
          </p>

          <p>
            In the field of Data Analysis, I work with Python, Pandas, 
            NumPy, SQL, and Excel to clean data, perform analysis, and 
            create clear visual reports.
          </p>

          <div className="about-info">
            <div><strong>Status:</strong> Fresher</div>
            <div><strong>Location:</strong> India</div>
            <div><strong>Focus:</strong> Full Stack Development & Data Analysis</div>
            <div><strong>Open to:</strong> Full-time & Internship Opportunities</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
