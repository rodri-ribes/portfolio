import style from './CardProject.module.scss'
import { BsGithub } from 'react-icons/bs'
import { BiLink } from 'react-icons/bi'
import { Dispatch, SetStateAction } from 'react'

export interface ProjectCard {
  title: string
  type: string
  technology: string
  img: string
  linkDeploy: string
  linkGithub: string
  text: string
  deployed: string
  images: string[]
  templateimg: string | undefined
}

interface Props extends ProjectCard {
  setModal: Dispatch<
    SetStateAction<{
      data: ProjectCard | null
      show: boolean
    }>
  >
}

const CardProject: React.FC<Props> = ({
  title,
  technology,
  img,
  linkDeploy,
  linkGithub,
  text,
  deployed,
  images,
  type,
  setModal,
  templateimg
}) => {
  return (
    <div className={style.container}>
      <div className={style.container__content}>
        <div
          className={style.container__content__data}
          onClick={() =>
            setModal((prev) => ({
              ...prev,
              data: {
                title,
                technology,
                img,
                linkDeploy,
                linkGithub,
                text,
                deployed,
                images,
                type,
                templateimg
              },
              show: true
            }))
          }
        >
          {/* <p className={style.container__content__data_type}>{type}</p> */}
          <img src={img} alt={title} />
          <div>
            <h1 className={style.container__content__data_title}>{title}</h1>
            <p className={style.container__content__data_tech}>{technology}</p>
            {/* <p className={style.container__content__data_detail}>{text}</p> */}
          </div>
        </div>
        <div className={style.container__social}>
          <a
            className={style.container__social_link}
            href={linkGithub}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>

          {deployed === 'finished' ? (
            <a
              className={style.container__social_link}
              href={linkDeploy}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
            </a>
          ) : (
            <p className={style.container__social_nolink}>{deployed}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProject
