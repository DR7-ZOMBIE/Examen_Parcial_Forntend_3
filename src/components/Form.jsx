import React, { useState } from 'react'
import Card from './Card'

const Form = ({ datos, setDatos }) => {

    //Aqui deberias agregar los estados y los handlers para los inputs

    const [genero, setGenero] = useState("")
    const [banda, setBanda] = useState("")
    const [informacionValida, setInformacionValida] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault()
        if (verificarPrimerInput() && verificarSegundoInput()) {
            setDatos(updateData())
            setInformacionValida({genero,banda})

        } else {
            alert('Por favor chequea que la información sea correcta')
            setInformacionValida(null);
        }
    }

    const verificarPrimerInput = () => {

        //Si el usuario deja un espacio en blanco al inicio lo corregimos con la expresion regular

        let validando = genero.replace(/^\s+/, '');

        if (validando.length >= 3) {
            setGenero(validando);
            return true;
        } else {
            setGenero(validando);
            return false;
        }
    }

    const verificarSegundoInput = () => {
        if (banda.length >= 6) {
            return true;
        } else {
            return false;
        }
    }

    const updateData = () => {
        return datos.map((i) => {
            if (genero === datos.genero && banda === datos.banda) {
                return {
                    ...i,
                    genero: genero,
                    banda: banda
                }
            }
            return i
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Ingrese genero a escuchar:</label>
                <input
                    type="text"
                    value={genero}
                    onChange={e => { setGenero(e.target.value) }}
                    placeholder='Ingrese su genero'
                />

                <label htmlFor=""> Ingrese banda a escuchar:</label>
                <input
                    type="text"
                    value={banda}
                    onChange={e => { setBanda(e.target.value) }}
                    placeholder='Ingrese su banda'
                />

                <button
                    type='submit'
                > Submit</button>
            </form>

            {informacionValida && (
                <Card genero={informacionValida.genero} banda={informacionValida.banda} />
            )}

        </>
    )
}

export default Form