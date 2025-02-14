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
      <main className='container'>
        <section className="text-center m-5">
          <h1 className="m-5">Busqueda por Usuario</h1>
          <BusquedaDeUsuario onSearchGitHubUser={ onSearchGitHubUser }/>
        </section>
        <section>
          <UserGitHub gitHubUser={ gitHubUser }/>
        </section>
      </main>
    </>
  )
}