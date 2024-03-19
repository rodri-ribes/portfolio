import style from './skills.module.scss'

import {
  SkillApplications,
  skillSDB,
  skillsFrameworks,
  skillsLenguajes,
  skillsLibrerias
} from './arrays'

import CardSkill from './CardSkill/CardSkill'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const [translation] = useTranslation('global')

  return (
    <div className={style.container} id="skills">
      <h3>{translation('navbar.skills')}</h3>
      <div className={style.container__wrapper}>
        <CardSkill
          data={skillsLenguajes}
          text={translation('skills.label-programming-languages')}
          animacion="fade-right"
          duration="1000"
          image={'./img/programming.jpg'}
          position={'0 -100px'}
        />
        <CardSkill
          data={skillsLibrerias}
          text={translation('skills.label-bookstores')}
          animacion="fade-left"
          duration="2000"
          image={'./img/bookstores.jpg'}
          position={'0 -100px'}
        />
        <CardSkill
          data={skillSDB}
          text={translation('skills.label-database')}
          animacion="fade-right"
          duration="1000"
          image={'./img/database.jpg'}
          position={'0 -100px'}
        />
        <CardSkill
          data={skillsFrameworks}
          text={translation('skills.label-frameworks')}
          animacion="fade-left"
          duration="2000"
          image={'./img/frameworks.jpg'}
          position={'0 -50px'}
        />
        <CardSkill
          data={SkillApplications}
          text={translation('skills.label-others')}
          animacion="fade-up"
          duration="3000"
          image={'./img/applications.jpg'}
          position={'0 -70px'}
        />
      </div>
    </div>
  )
}

export default Skills
