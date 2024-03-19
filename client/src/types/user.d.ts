export interface User {
    _id: string
    firstname: string
    lastname: string
    image: {
        link: string
        name: string
    }
    email: string
    domicile: {
        address: string
        location: string
    }
    whatsapp: number
    password: string
    cart: string
    favorites: string
    ban: boolean
    rol: string
}
