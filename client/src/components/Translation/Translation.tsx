import style from './Translation.module.scss'
import spanish from './img/spanish.png'
import english from './img/english.png'
import { useTranslation } from 'react-i18next'

export default function Translation() {
  const [, i18n] = useTranslation('global')
  return (
    <div className={style.container}>
      <button onClick={() => i18n.changeLanguage('es')}>
        <img src={spanish} alt="Spanish" />
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        <img src={english} alt="English" />
      </button>
    </div>
  )
}
