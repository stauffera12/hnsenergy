import { createContext, useContext } from "react"
export type GlobalContent = {
    userLocation: object
    setUserLocation: object
}
export const UserLocationContext = createContext<GlobalContent>({
    userLocation: {}, // set a default value
    setUserLocation: {},
})

export const useGlobalContext=()=>useContext(UserLocationContext)