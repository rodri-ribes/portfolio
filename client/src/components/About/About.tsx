import { useTranslation } from 'react-i18next'
import style from './About.module.scss'

function About(): JSX.Element {
  const [translation, i18n] = useTranslation('global')

  return (
    <div className={style.container} id="about">
      <div className={style.container__img}>
        <img
          src="./img/perfil.jpg"
          alt="rodrigo"
          data-aos="flip-right"
          data-aos-duration="1000"
        />
      </div>
      <div className={style.container__content}>
        <p data-aos="fade-left" data-aos-duration="1000">
          {translation('about.about')}
        </p>
        <div className={style.container__content__buttons}>
          <a
            data-aos="zoom-in"
            className={'buttonDefault'}
            href={
              i18n?.language === 'es'
                ? `${encodeURI('./cv/cv rodrigo ribes full stack.pdf')}`
                : `${encodeURI('./cv/resume rodrigo ribes full stack.pdf')}`
            }
            target="_blank"
            rel="noreferrer"
          >
            {translation('about.btn-resume')}
          </a>
          <a
            data-aos="zoom-in"
            className={'buttonTwo'}
            href={
              i18n?.language === 'es'
                ? './cv/rodrigoribes-fullstack-spanish.pdf'
                : './cv/rodrigoribes-fullstack-english.pdf'
            }
            download
          >
            {translation('about.download') +
              ' ' +
              translation('about.btn-resume')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
