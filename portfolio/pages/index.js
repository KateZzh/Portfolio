import style from '@/styles/Home.module.scss';
import {
  arrContacts,
  arrWorkExperience,
  arrMainSkills,
  arrEducationList,
  arrLanguagesList,
} from '@/storage/storage';

export default function Home() {
  return (
    <>
      <div className={style.section}>
        <div className={style.mainInfo}>
          <div className={style.imgAvatar}></div>

          <div className={style.contacts}>
            <h2>Katsiaryna Zhytniak</h2>

            {arrContacts.map((el, i) => (
              <div key={i}>
                <p className={style.form}>{el.form}</p>
                <p className={style.info}>{el.info}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.workExperience}>
          <h3>Work Experience</h3>

          <div className={style.wrapper}>
            {arrWorkExperience.map((el, i) => (
              <div className={style.wrapperJob} key={i}>
                <p className={style.jobTitle}>{el.jobTitle}</p>
                <p className={style.company}>{el.company}</p>
                <p className={style.timePeriod}>{el.timePeriod}</p>
                <p className={style.describe}>{el.describe}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.skills}>
          <h3 className={style.titleSkills}>Skills</h3>

          <div className={style.mainSkills}>
            {arrMainSkills.map((el, i) => (
              <div key={i}>
                <p>{el}</p>
              </div>
            ))}
          </div>

          <div className={style.wrapperEducation}>
            <div className={style.education}>
              <div className={style.img1}></div>

              <div className={style.educationList}>
                <h3 className={style.title}>Education</h3>

                {arrEducationList.map((el, i) => (
                  <div key={i}>
                    <p>{el}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.languages}>
              <div className={style.img2}></div>

              <div className={style.languagesList}>
                {arrLanguagesList.map((el, i) => (
                  <div key={i}>
                    <p>{el}</p>
                  </div>
                ))}
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
      </div>
    </>
  );
}
