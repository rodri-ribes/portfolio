import { useTranslation } from 'react-i18next'
import style from './Service.module.scss'
import FeatureCard from './FeatureCard/FeatureCard'

function Service(): JSX.Element {
  const [translation] = useTranslation('global')

  const features = [
    {
      logo: 'bi bi-speedometer2',
      title: translation('services.title-fast'),
      text: translation('services.description-fast')
    },
    {
      logo: 'bi bi-phone',
      title: translation('services.title-responsive'),
      text: translation('services.description-responsive')
    },
    {
      logo: 'bi bi-rocket-takeoff',
      title: translation('services.title-dynamic'),
      text: translation('services.description-dynamic')
    }
  ]
  return (
    <div className={style.container} id="services">
      <h3>{translation('navbar.service')}</h3>
      <div className={style.container__wrapper}>
        <div
          className={style.container__wrapper__content}
          data-aos={'fade-right'}
          data-aos-duration={'1000'}
        >
          <b>{translation('services.title-freelance')}</b>

          <p>
            {translation('services.freelance-description-one')}
            <a
              href={`https://ribes-webs.vercel.app/`}
              target="_blank"
              rel="noreferrer"
            >
              Ribes-Webs
            </a>
            {translation('services.freelance-description-two')}
          </p>
          <b>{translation('services.title-company')}</b>
          <p>
            {translation('services.company-description-one')}
            <a
              href={`mailto:rodri_ribes@hotmail.com?Subject=${encodeURI(
                '¿ Coordinamos una Entrevista ?'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              {translation('services.company-description-two')}
            </a>
            {translation('services.company-description-three')}
          </p>
        </div>
        <ul className={style.container__wrapper__features}>
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              logo={f.logo}
              text={f.text}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Service
