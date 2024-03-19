import style from './SocialNetworks.module.scss'

interface Props {
  social: {
    linkedin: string | undefined
    github: string | undefined
    link: string | undefined
    whatsapp: string | undefined
  }
}

const SocialNetworks: React.FC<Props> = ({ social }): JSX.Element => {
  return (
    <div className={style.container}>
      <a
        href={social?.linkedin}
        target="_blank"
        rel="noreferrer"
        className={style.container__social__group}
        style={social?.linkedin ? { display: 'flex' } : { display: 'none' }}
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href={social?.github}
        target="_blank"
        rel="noreferrer"
        className={style.container__social__group}
        style={social?.github ? { display: 'flex' } : { display: 'none' }}
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href={social?.whatsapp}
        target="_blank"
        rel="noreferrer"
        className={style.container__social__group}
        style={social?.whatsapp ? { display: 'flex' } : { display: 'none' }}
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a
        href={social?.link}
        target="_blank"
        rel="noreferrer"
        className={style.container__social__group}
        style={social?.link ? { display: 'flex' } : { display: 'none' }}
      >
        <i className="bi bi-link-45deg"></i>
      </a>
      {/* <a href={social?.youtube} target="_blank" rel="noreferrer" className={style.container__social__group} style={social?.youtube ? { display: "flex" } : { display: "none" }}>
        <i class="bi bi-youtube"></i>
    </a> */}
    </div>
  )
}

export default SocialNetworks
