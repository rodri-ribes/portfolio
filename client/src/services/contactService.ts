import axios from 'axios'

const { VITE_API } = import.meta.env

interface Props {
    name: string
    email: string
    message: string
}

export async function contactService(body: Props): Promise<void> {

    try {
        const resp = await axios.post(`${VITE_API}/contact`, body)
        
        return resp.data
    } catch (error) {
        console.log(error)
    }

    // await fetch(`${VITE_API}/contact`, {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // })

    // if(!resp.ok){
    //     throw new Error('Error');
    // }
}