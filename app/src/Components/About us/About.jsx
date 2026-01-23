import "./About.css";
import Navbar from "../Homepage/Navbar/Navbar"; 
import Footer from "../Homepage/Footer/Footer";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useRef, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
const AboutPage = () => {
  

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
        else setActive(false);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-row ${index % 2 === 0 ? "left" : "right"} ${
        active ? "active" : ""
      } ${item.milestone ? "milestone" : ""}`}
    >
      <div className="timeline-dot" />

      <div className="timeline-card">
        <span className="meta">
          {item.date} &nbsp;•&nbsp; {item.location}
        </span>
        <h3>{item.title}</h3>

        <div className="timeline-desc">{item.desc}</div>
      </div>
    </div>
  );
}

  return (
    <>
      <Navbar />
    <main className="about-wrapper">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="hero-content">
          <h1 className="brand">Aazhi</h1>
          <p className="tagline">The Ocean Within</p>

          <p className="hero-quote">
            “Life, to us, is like the ocean—vast, beautiful, and at times unpredictable.”
          </p>

          <p className="hero-sub">
            Each person is a traveler, learning to move through calm waters and stormy tides,
            often unsure of direction yet still moving forward.
          </p>

          <div className="scroll-indicator">
            {/* <span>Discover Our Story</span> */}
            <div className="scroll-line" />
          </div>
        </div>

        <div className="wave wave-bottom" />
      </section>

      {/* ================= STORY ================= */}
      <section className="section story">
        <h2>Discover Our Story</h2>

        <p className="story-lines">
          Growing up in <strong>Neithal Nilam, Cuddalore</strong>, the sea was not just a landscape
          but a quiet teacher. What appeared calm on the surface often carried deep,
          unseen currents beneath.
        </p>

        <p className="story-lines">
          Life mirrors this rhythm. Though inherently beautiful, its waves can sometimes
          pull us into fear, confusion, and overwhelm.
        </p>

        <blockquote className="highlight-quote">
          “Just as boats lost in deep waters look for direction, many individuals find
          themselves struggling without clarity or support.”
        </blockquote>

        <p className="story-lines">
          <strong>Aazhi</strong> was born from this understanding — to be a steady lighthouse,
          offering guidance without force, and walking alongside people as they navigate
          their inner waves.
        </p>
      </section>

      {/* ================= GAP & THE BRIDGE ================= */}
<section className="gap-bridge-section">
  <div className="gap-bridge-header">
    <span className="eyebrow">THE NEED WE SAW</span>
    <h2>The Gap & The Bridge</h2>
  </div>

  <div className="gap-bridge-main">
    {/* Left Card */}
    <div className="gb-card">
      <div className="gb-card-title">
        <span className="icon">
  <InfoOutlineIcon fontSize="large" />
</span>

        <h3>The Gap</h3>
      </div>
      <ul>
        <li>Symptoms without context</li>
        <li>One-size-fits-all approaches</li>
        <li>Cultural disconnect</li>
        <li>Divide between science & empathy</li>
      </ul>
    </div>

    {/* Center Bridge */}
    <div className="gb-bridge">
      <div className="line" />
      <div className="bridge-circle">ஆ</div>
      <div className="line" />
      <span className="bridge-label">AAZHI</span>
    </div>

    {/* Right Card */}
    <div className="gb-card">
      <div className="gb-card-title">
       <span className="icon heart">
  <FavoriteBorderIcon fontSize="large" />
</span>

        <h3>Our Response</h3>
      </div>
      <ul>
        <li>Science + Humanities</li>
        <li>Cultural & social context</li>
        <li>Listening beyond labels</li>
        <li>Collaborative & ethical care</li>
      </ul>
    </div>
  </div>

  {/* Bottom Text */}
  <div className="gap-bridge-bottom">
    <div>
      <h4>The Problem</h4>
      <p className="gap-para">
        Many people seeking psychological support feel misunderstood—reduced to
        symptoms or diagnoses that don't reflect their social, cultural, and
        relational realities. In India, emotional distress is shaped by family
        structures, societal expectations, and collective identities—yet these
        layers are often overlooked.
      </p>
    </div>

    <div>
      <h4 className="accent">Aazhi’s Solution</h4>
      <p>
        Our work is grounded in psychological science while remaining deeply
        attentive to lived contexts. We listen beyond labels, remain curious
        about individual experience, and work collaboratively—offering support
        that is informed, ethical, and humane.
      </p>
    </div>
  </div>
</section>


    {/* ================= MISSION ================= */}
{/* ================= MISSION ================= */}
<section className="mission-section">
  <blockquote className="mission-quote">
    “Our mission is to make therapy accessible by developing an Indian-contextual
    approach—one that integrates psychological science while remaining deeply
    attentive to lived experience, culture, family, and social realities.”
  </blockquote>
</section>


      {/* ================= FOUNDER ================= */}
     {/* ================= FOUNDER ================= */}
<section className="founder-scroll-section">
  <div className="founder-header">
    <span className="eyebrow">MEET OUR FOUNDER</span>
    <div className="name-with-social">
  <h2>Someshwari</h2>

  <div className="socials">
    <a
      href="https://www.instagram.com/_tamil_psychologist"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon />
    </a>
  </div>
</div>

    <p className="role">Counselling Psychologist</p>
  </div>

  <div className="founder-quote-box">
    “A person cannot be understood in isolation; understanding their world is the
    psychologist’s deepest work.”
  </div>

  <div className="timeline-container">
    <div className="timeline-line" />

    {[
      {
        date: "July 2022",
        location: "TN Govt Hospital, Cuddalore",
        title: "Clinical Psychology Observer",
        desc:
          "Gained early exposure to public mental health systems, observing diverse clinical presentations and participating in assessment and student screening processes.",
      },
      {
        date: "2023",
        location: "LPU, Punjab",
        title: "M.A. Psychology",
        desc:
          "Built a strong foundation in psychological science, assessment, and research.",
      },
      {
        date: "Dec 2023",
        location: "Under Supervision",
        title: "Counselling Psychologist (Supervised)",
        desc:
          "Facilitated 170 counselling sessions under structured supervision, strengthening ethical practice and reflective skills.",
      },
      
      {
  date: "Aug 2024",
  location: "Johns Hopkins University – Coursera",
  title: "Psychological First Aid (6 hrs)",
  desc:
    "Strengthened crisis-response skills with focus on reflective listening, assessment, and immediate psychological support.",
},
      {
        date: "Sept 2024",
        location: "Chennai, India",
        title: "AAZHI Founded",
        desc:
          "The beginning of Aazhi’s journey to make therapy accessible through an Indian-contextual approach.",
        milestone: true,
      },
{
  date: "Sept 2024 – Jan 2025",
  location: "IIPR, Bangalore",
  title: "Art Therapy Certification (56 hrs)",
  desc:
    "Gained experiential training in creative and non-verbal therapeutic techniques, applied practically with children, adults, and self.",
},
{
  date: "Oct 2024 – Dec 2024",
  location: "Cancer Institute, Adyar",
  title: "Psycho-Oncology Observer",
  desc:
    "Built sensitivity toward illness-related psychological distress by working with cancer patients, caregivers, and support systems across adult and paediatric wards.",
},
{
  date: "Nov 2024",
  location: "Cancer Institute, Adyar",
  title: "Tobacco Cessation & School Prevention (6 hrs)",
  desc:
    "Developed preventive counselling skills focused on school-based tobacco awareness and intervention.",
},
{
  date: "Dec 2024 – Jan 2025",
  location: "Magilchi Wellbeing Centre, Velachery",
  title: "Psychology Intern",
  desc:
    "Worked within an interdisciplinary mental health team, conducting psychological screenings and facilitating gender-specific group interventions.",
},
{
  date: "Jan 2025 – Feb 2025",
  location: "IIPRT & TNPA",
  title: "School Psychology Certification (38 hrs)",
  desc:
    "Developed competence in school counselling, child and adolescent assessment, inclusive practices, and child protection frameworks.",
},
{
  date: "Feb 2025 – Mar 2025",
  location: "Institute of Mental Health, Kilpauk",
  title: "Clinical Psychology Intern",
  desc:
    "Gained hands-on experience in psychiatric and psychosocial settings, with focused involvement in psychological assessment for developmental and neurodevelopmental conditions.",
},
{
  date: "Nov 2025",
  location: "KKHOUS",
  title: "Qualitative Research Workshop (Certified)",
  desc:
    "Strengthened qualitative research skills with emphasis on narratives, lived experience, and context-driven inquiry.",
},
{
  date: "Nov 2025 – Jan 2026",
  location: "Prakruti – Women’s Safety Organization",
  title: "Research Intern",
  desc:
    "Engaged in research addressing women’s safety, grounding psychological inquiry in gendered, social, and community realities.",
},

    ].map((item, index) => (
      <TimelineItem key={index} item={item} index={index} />
    ))}
  </div>

  <div className="founder-vision">
    <h4>Founder’s Vision</h4>
    <p>
      To build an approach to therapy in India that thoughtfully engages with caste,
      religion, gender, and social location—integrating these realities into practice
      while contributing to the field through ongoing research.
    </p>
  </div>
</section>


      {/* ================= CO-FOUNDER ================= */}
    {/* ================= CO-FOUNDER ================= */}
<section className="founder-scroll-section">
  <div className="founder-header">
    <h2 className="co-founder">MEET OUR CO-FOUNDER</h2>
    <h2>Udaya Priyanka</h2>
    <p className="role">Social Worker & Community Builder</p>
  </div>

  <div className="founder-quote-box">
    “We advocate for spaces where children are heard and parents are informed,
    fostering stronger families and resilient communities.”
  </div>

  <div className="timeline-container">
    <div className="timeline-line" />

    {[
      {
        date: "2019 – 2021",
        location: "University",
        title: "M.S.W. – Family & Child Welfare",
        desc:
          "Completed Master of Social Work with a focus on family systems, child development, and community-based welfare approaches.",
      },
      {
        date: "July 2020",
        location: "HCL Foundation",
        title: "Data Collection Intern",
        desc:
          "Developed skills in data collection, stakeholder communication, and field-level documentation within community initiatives.",
      },
      {
        date: "Sept 2021",
        location: "Centre for Urbanism",
        title: "Research Intern",
        desc:
          "Gained hands-on experience in designing and conducting field surveys, stakeholder engagement, and analysing community perceptions.",
      },
      {
        date: "Aug 2021 – Dec 2025",
        location: "United Beings Foundation",
        title: "Co-Founder — Project Vriddhagami",
        desc:
          "Led community-based research, education, and sustainability initiatives through surveys, art-integrated STEAM programs, and eco-friendly projects. Built leadership capacity through volunteer coordination, event planning, and community engagement.",
        milestone: true,
      },
      {
        date: "Mar 2024 – Apr 2024",
        location: "Child & Adolescent Foundation India",
        title: "Research Associate",
        desc:
          "Contributed to course content development and strengthened academic writing skills through publication in an online journal.",
      },
      {
        date: "June 2025 – Present",
        location: "SCARF Foundation",
        title: "Diploma in Mental Health Care & Counselling",
        desc:
          "Currently pursuing advanced training in mental health care and counselling, with emphasis on ethical practice and applied community work.",
      },
    ].map((item, index) => (
      <TimelineItem key={index} item={item} index={index} />
    ))}
  </div>

  <div className="founder-vision">
    <h4>Co-Founder’s Vision</h4>
    <p>
      To foster inclusive, socially aware, and sustainable communities where children
      grow in environments that value their voices, encourage free expression, and
      nurture emotional well-being—while parents develop informed awareness of
      nurturing parenting practices and their long-term impact.
    </p>
  </div>
</section>

    </main>
    <Footer />
    </>
  );
};

export default AboutPage;
