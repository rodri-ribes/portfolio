import { Dispatch, SetStateAction, useEffect } from 'react'
import style from './Modal.module.scss'

import Carousel from '../Portfolio/Carousel/Carousel'
import { ProjectCard } from '../Portfolio/CardProject/CardProject'

interface Props {
  setModal: Dispatch<
    SetStateAction<{
      data: ProjectCard | null
      show: boolean
    }>
  >
  modal: {
    data: ProjectCard | null
    show: boolean
  }
}

const Modal: React.FC<Props> = ({ setModal, modal }) => {
  useEffect(() => {
    function closeModal(e: MouseEvent) {
      if (e.target instanceof HTMLElement) {
        if (modal.show === true && e?.target?.id?.includes('container_modal')) {
          setModal((prev) => ({ ...prev, show: false }))
        }
      }
    }
    document.addEventListener('click', (e) => closeModal(e))

    return () => document.removeEventListener('click', closeModal)
  }, [modal, setModal])

  return (
    <div className={style.container} id="container_modal">
      <div className={style.container__content}>
        <header>
          <h4>{modal.data?.title}</h4>
          <button
            onClick={() => setModal((prev) => ({ ...prev, show: false }))}
          >
            <i className="bi bi-x"></i>
          </button>
        </header>
        <div className={style.container__content__wrapper}>
          <div className={style.container__content__wrapper__images}>
            <Carousel images={modal?.data?.images as string[]} />
          </div>
          <div className={style.container__content__wrapper__content}>
            <p className={style.container__content__wrapper__content_tech}>
              {modal?.data?.technology}
            </p>
            <p className={style.container__content__wrapper__content__text}>
              {modal?.data?.text}{' '}
              {modal?.data?.templateimg && (
                <a
                  href={modal?.data?.templateimg}
                  title="Imagen en la que me base para diseñar la plantilla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver Imagen
                </a>
              )}
            </p>
            <div
              className={style.container__content__wrapper__content__buttons}
            >
              <a
                className={'buttonDefault'}
                href={modal?.data?.linkGithub}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
                Ver Repositorio{' '}
              </a>
              {modal?.data?.deployed === 'finished' ? (
                <a
                  href={modal?.data?.linkDeploy}
                  target="_blank"
                  rel="noreferrer"
                  className={'buttonDefault'}
                >
                  <i className="bi bi-link"></i>
                  Ver Pagina
                </a>
              ) : (
                <p>{modal?.data?.deployed}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
