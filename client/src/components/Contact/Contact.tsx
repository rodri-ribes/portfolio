import { ChangeEvent, FormEvent, useState } from 'react'
import style from './Contact.module.scss'
import SocialNetworks from '../Footer/SocialNetworks/SocialNetworks'
import { useMutation } from '@tanstack/react-query'
import { contactService } from '../../services/contactService'
import { useTranslation } from 'react-i18next'

const Contact = (): JSX.Element => {
  const [translation] = useTranslation('global')

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactMutation = useMutation({
    mutationFn: contactService
  })

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (data.name && data.email && data.message) {
      contactMutation.mutate(data)
      setData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={style.container} id="contact">
      <h3>{translation('navbar.contact')}</h3>
      <p>{translation('contact.text')}</p>
      <div className={style.container__wrapper}>
        <div className={style.container__wrapper__social}>
          <p>{translation('contact.social')}</p>
          <SocialNetworks
            social={{
              linkedin: 'https://www.linkedin.com/in/rodrigo-ribes/',
              github: 'https://github.com/rodri-ribes',
              link: 'https://ribes-webs.vercel.app/',
              whatsapp: 'https://api.whatsapp.com/send/?phone=5492246517581'
            }}
          />
        </div>
        <form onSubmit={submit}>
          <input
            value={data.name}
            placeholder={translation('contact.input-name')}
            type="text"
            name="name"
            onChange={handleOnChange}
          />
          <input
            value={data.email}
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleOnChange}
          />
          <textarea
            value={data.message}
            placeholder={translation('contact.input-message')}
            name="message"
            onChange={handleOnChange}
          />
          <button
            disabled={
              contactMutation.isSuccess ||
              !data.name ||
              !data.email ||
              !data.message
            }
            type="submit"
          >
            {contactMutation.isPending
              ? '...'
              : contactMutation.isSuccess
              ? 'Enviado...'
              : translation('contact.btn-send')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
