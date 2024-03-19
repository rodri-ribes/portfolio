/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Link } from '../../../types/link'
import { type User } from '../../../types/user'

export const filterLink = (user: User) => {
  return (x: Link) => {
    return (
      (user && (user.rol === x.rol || x.rol === 'user')) ||
      (!user && x.rol === 'guest')
    )
  }
}
