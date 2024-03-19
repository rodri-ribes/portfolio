export interface PageSetting {
  name_of_the_page: string
  email: string
  whatsapp: string
  local_active: boolean
  schedule: string
  alias_mp: string
  store_address: {
    address: string
    location: string
    province: string
  }
  free_min_amount: number
  shipping_price: number
}
