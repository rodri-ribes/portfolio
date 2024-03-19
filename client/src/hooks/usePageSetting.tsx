import { type PageSetting } from '../types/pageSetting'

const defaultSetting = {
  name_of_the_page: 'Rodrigo Ribes </>',
  email: 'rodri_ribes@hotmail.com',
  whatsapp: '2246517581',
  local_active: true,
  schedule: 'lunes a Viernes de 09:00 a 13:00 y 17:00 a 21:00',
  alias_mp: 'rodri.ribes',
  store_address: {
    address: 'Calle 7 n 560',
    location: 'Santa Teresita',
    province: 'Buenos Aires'
  },
  free_min_amount: 20000,
  shipping_price: 2000
}

interface Props {
  setting: PageSetting
}

const usePageSetting = (): Props => {
  return {
    setting: defaultSetting
  }
}

export default usePageSetting
