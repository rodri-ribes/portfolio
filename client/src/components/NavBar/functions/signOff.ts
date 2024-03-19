import { type QueryClient } from '@tanstack/react-query'

export default function signOff(queryClient: QueryClient): void {
    window.localStorage.removeItem('user')
    queryClient.setQueryData(['user'], false)
}
