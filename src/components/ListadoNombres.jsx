import React, { Fragment, useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () => {

    const [nombre, setNombre] = useState('')
    let [listanombre, setListanombre] = useState([])
    let [modoedicion, setModoEdicion] = useState(false)

    const addNombre = (e) => {
        e.preventDefault()

        //Esta linea controla el estado que modificamos al ingresar nombres desde el formulario.
        const nuevoNombre = {
            id: uniqid(),
            name:nombre
        }
        setListanombre([...listanombre, nuevoNombre])

        if(!nombre.trim()){
            console.log('El campo "NOMBRE", se encuentra VACIO')
            setListanombre(nombre)
        }

        e.target.reset()
    }

    const deleteName = (id) => {
        let nuevoArray = listanombre.filter( item => item.id !== id)
        setListanombre(nuevoArray)
    }

    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.name)

    }

    return ( 
        <Fragment>
            <h1>Aplicacion de CRUD en React</h1><br></br>

            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres</h2>
                    <ul className="list-group">
                        {
                            listanombre.map( item => 
                                <li key="{item.id}" 
                                className="list-group-item">
                                <b> {item.name} </b>
                                <button className="btn btn-danger btn-sm float-right"
                                    onClick={ () => {deleteName(item.id)} }
                                >Borrar</button>
                                 <button className="btn btn-dark btn-sm float-right"
                                    onClick={ () => {editar(item)} }
                                >Editar</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2 className="mb-4">Formulario para Añadir Nombres</h2>
                    <form onSubmit={(e) => addNombre(e)} className="form-group">
                        <input 
                            className="form-control mb-3" 
                            type="text" placeholder="Introduce un Nombre" 
                            onChange={ (e) => {setNombre(e.target.value)} }>
                        </input>

                        <input 
                            className="btn-info btn-block" 
                            type="submit" 
                            onChange={ (e) => {setNombre(e.target.value)} }
                            value={modoedicion ? 'Editar Nombre' : 'Registrar Nombre'}>
                        </input>
                    </form>
                </div>
            </div>

        </Fragment>
     );
}
 
export default ListadoNombres;