import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const { artista, cancion } = busqueda;

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const [error, guardarError] = useState(false);

    const buscarInformacion = e => {
        e.preventDefault();
        if (artista.trim() === "" || cancion.trim() === "") {
            guardarError(true);
            setTimeout(() => guardarError(false), 2000);
            return;
        }
        guardarError(false);
        guardarBusquedaLetra(busqueda);
    }

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form onSubmit={buscarInformacion} className="col card text-white bg-trasparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text" className="form-control" name="artista" placeholder="Artista" value={artista} onChange={actualizarState} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input type="text" className="form-control" name="cancion" placeholder="Cancion" value={cancion} onChange={actualizarState} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;