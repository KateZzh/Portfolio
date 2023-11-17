import style from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={style.section}>
        <div className={style.mainInfo}>
          <div className={style.imgAvatar}></div>

          <div className={style.contacts}>
            <h2>Katsiaryna Zhytniak</h2>

            <div>
              <p className={style.form}>Country</p>
              <p className={style.info}>Belarus</p>
            </div>

            <div>
              <p className={style.form}>Phone</p>
              <p className={style.info}>+375444753587</p>
            </div>

            <div>
              <p className={style.form}>E-mail</p>
              <p className={style.info}>ekaterin.pro2@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={style.workExperience}>
          <h3>Work Experience</h3>

          <div className={style.wrapper}>
            <p className={style.jobTitle}>Full Stack Developer</p>
            <p className={style.company}>HSC</p>
            <p className={style.timePeriod}>July 2022 - Present</p>
            <p className={style.describe}>
              Developed knowledge assessment pages with automatic assessment and scoring of
              students&#39; work. Implemented algorithms for automatic checking of answers and
              scoring to provide instant feedback. Provided a smooth user experience by combining
              frontend and backend development skills. Maintained and updated the existing code
              base, making improvements and correcting errors as needed.
            </p>
          </div>

          <div className={style.wrapper}>
            <p className={style.jobTitle}>Frontend Developer</p>
            <p className={style.company}>Freelance</p>
            <p className={style.timePeriod}>September 2023 - November 2023</p>
            <p className={style.describe}>
              Designed and implemented adaptive and accessible web applications using HTML, CSS, and
              JavaScript. Work closely with designers to translate UI/UX design sketches into
              working code.
            </p>
          </div>
        </div>

        <div className={style.skills}>
          <h3>Skills</h3>

          <div className={style.mainSkills}>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>node.js</p>
            <p>Express</p>
            <p>React</p>
            <p>Redux Toolkit Query</p>
            <p>Swagger</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>Jest</p>
            <p>Mocha</p>
          </div>

          <div className={style.education}>
            <div className={style.img1}></div>

            <div className={style.educationList}>
              <h3>Education</h3>
              <p>BSTU, Faculty of Chemical Technology and Engineering, Minsk.</p>
              <p>JavaScript, TypeScript developer, HSchool.</p>
              <p>Web Development for Beginners: HTML and CSS, Stepik.</p>
              <p>JavaScript for Beginners, Stepik.</p>
              <p>Interactive SQL Simulator, Stepik.</p>
            </div>
          </div>

          <div className={style.languages}>
            <div className={style.img2}></div>

            <div className={style.languagesList}>
              <p>English B1</p>
              <p>Russian C2</p>
            </div>
          </div>

          <div className={style.myPortfolio}>
            <div className={style.qrCode}></div>

            <div className={style.portfolioInfo}>
              <h3>my portfolio</h3>
              <p>github.com/KateZzh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
