import { useState, ChangeEvent, FormEvent } from "react"

interface busquedaDeUsuarioProps {
    onSearchGitHubUser: (inputValue: string) => void,
}

export const BusquedaDeUsuario = ({onSearchGitHubUser}: busquedaDeUsuarioProps) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ( {target}:ChangeEvent<HTMLInputElement> ):void => {
        setInputValue(target.value);
    }

    const onSubmit = ( event: FormEvent<HTMLFormElement> ):void => {
        event.preventDefault();

        onSearchGitHubUser(inputValue);
        setInputValue('');
    }


  return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                className="form-control mb-3"
                type="text"
                placeholder="Digita usuario de GitHub, ejemplo ederramosh"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button className="btn btn-primary">Search</button>
        </form>
    </>
  )
}

