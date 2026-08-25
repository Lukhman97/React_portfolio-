import React from "react";
import "../css/Projects.css";
import ProjectSection from "./ProjectSection";

// Import all images
import agri from "../../assets/agri-gro.png";
import portfolioImg from "../../assets/portfoilo1111.jpeg";
import foodBlog from "../../assets/food_blog.png";
import dhoni from "../../assets/dhoni.jpeg";
import clock from "../../assets/digital_clock.jpeg";
import fashion from "../../assets/fashion_mart.jpeg";
import calculator from "../../assets/caliculator1.jpeg";
import registration from "../../assets/registration.jpeg";
import travel from "../../assets/travel_paln.jpg";
import voice from "../../assets/voice asistance.png";
import powerbi from "../../assets/power_bi.png";

function Projects() {
  const djangoProjects = [
    {
      image: registration,   // You can replace with hospital image later
      title: "Hospital Management System",
      description:
        "Full-stack Hospital Management System built using React (Vite) and Django REST Framework. Includes JWT authentication, role-based access (Admin/Doctor/Patient), and complete CRUD operations.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://hospita-management-system.vercel.app/"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/Hospita_Management_System-"
        }
      ]
    },
    {
      image: agri,
      title: "Agriculture E-Commerce Platform",
      description:
        "Django-based platform for farmers to sell goods directly to customers.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://e-comerse-web-site.onrender.com"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/E-comerse_web_site"
        }
      ]
    }
  ];

  const frontendProjects = [
    {
      image: portfolioImg,
      title: "Portfolio Website",
      description: "Responsive personal portfolio built using HTML/CSS.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://react-portfolio-three-roan.vercel.app/"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/My_Portfoilo_Website"
        }
      ]
    },
    {
      image: foodBlog,
      title: "Food Blog Website",
      description: "Modern food blog UI using HTML & CSS.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/css_project_food_blog/new_file.html"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/css_project_food_blog"
        }
      ]
    },
    {
      image: dhoni,
      title: "Dhoni Biopic Page",
      description: "A tribute page created using HTML & CSS.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/Dhoni_Biopic_css_html/miniproject.html"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/Dhoni_Biopic_css_html/blob/main/miniproject.html"
        }
      ]
    },
    {
      image: clock,
      title: "JavaScript Clock App",
      description:
        "A real-time digital clock created using HTML, CSS, and JavaScript.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/clock_project_js/index.html"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/clock_project_js/blob/main/index.html"
        }
      ]
    },
    {
      image: fashion,
      title: "Fashion Mart – Kaira",
      description:
        "A modern ecommerce fashion UI built with HTML & CSS.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/html_front_project_kaira/fashion_mart1.html"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/html_front_project_kaira/blob/main/fashion_mart1.html"
        }
      ]
    },
    {
      image: calculator,
      title: "JavaScript Calculator",
      description:
        "A functional calculator built using HTML, CSS, and JavaScript.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/clock_project_js/Caliculator.html"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/clock_project_js/blob/main/Caliculator.html"
        }
      ]
    },
    {
      image: registration,
      title: "Registration Form",
      description:
        "Responsive registration form with HTML, CSS, and JavaScript validation.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/Registration_form/"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/Registration_form/blob/main/index.html"
        }
      ]
    },
    {
      image: travel,
      title: "Lonely Travel Plane",
      description:
        "Responsive travel planning website with HTML, CSS, and JavaScript.",
      links: [
        {
          label: "🌐 Live Demo",
          url: "https://lukhman97.github.io/Lonely_Travel_Plane_01/"
        },
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/Lonely_Travel_Plane_01"
        }
      ]
    }
  ];

  const fullStackProjects = [
  {
    image: registration, // Replace with a Gym project screenshot later
    title: "Gym Management System",
    description:
      "A full-stack Gym Management System built using React (Vite) for the frontend and a backend API. Features include member registration, trainer management, workout plans, authentication, responsive UI, and deployment on Vercel.",
    links: [
      {
        label: "🌐 Live Demo",
        url: "https://gym-project-new.vercel.app/"
      },
      {
        label: "💻 Code",
        url: "https://github.com/Lukhman97/Gym_project_New"
      }
    ]
  },
  {
    image: registration, // Replace with hospital screenshot later
    title: "Hospital Management System",
    description:
      "A full-stack Hospital Management System developed with React (Vite) and Django REST Framework. Implements JWT authentication, role-based access (Admin, Doctor, Patient), appointment management, patient records, and CRUD operations.",
    links: [
      {
        label: "🌐 Live Demo",
        url: "https://hospita-management-system.vercel.app/"
      },
      {
        label: "💻 Code",
        url: "https://github.com/Lukhman97/Hospita_Management_System-"
      }
    ]
  }
];

  const pythonProjects = [
    {
      image: voice,
      title: "AI Voice Assistant",
      description:
        "Python-based desktop voice command automation system.",
      links: [
        {
          label: "💻 Code",
          url: "https://github.com/Lukhman97/voice_assistance_using-python/blob/main/voice-assitance_using_python.py"
        }
      ]
    }
  ];

  const powerBIProjects = [
    {
      image: powerbi,
      title: "Power BI Dashboards",
      description:
        "Interactive dashboards using Power BI, DAX, KPIs, and business analytics.",
      links: [
        {
          label: "📊 View Projects",
          url: "https://github.com/Lukhman97/PowerBi_Projects"
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title" id="projects">Projects</h2>

      <ProjectSection title="Django" projects={djangoProjects} />
      <ProjectSection title="Frontend" projects={frontendProjects} />
      <ProjectSection
  title="Full Stack"
  projects={fullStackProjects}
/>
      <ProjectSection title="Python" projects={pythonProjects} />
      <ProjectSection title="Power BI" projects={powerBIProjects} />
    </section>
  );
}

export default Projects;