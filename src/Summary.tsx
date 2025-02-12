import { useState } from "react"
import { BusquedaDeUsuario } from "./components/BusquedaDeUsuario"
import { UserGitHub } from "./components/UserGitHub"

export const Summary = () => {

    const [gitHubUser, setGitHubUser] = useState<string>('');

    const onSearchGitHubUser = (inputValue: string): void => {
        setGitHubUser(inputValue);

    }

  return (
    <>
        <h1>Busqueda por usuario</h1>
        <BusquedaDeUsuario onSearchGitHubUser={ onSearchGitHubUser }/>
        <UserGitHub gitHubUser={ gitHubUser }/>
    </>
  )
}