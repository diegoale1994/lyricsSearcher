import React from 'react';

const Info = ({ info }) => {
    if (Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strBiographyEN } = info;
    debugger
    return (
        <div className="card board-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
           </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="logo artista"></img>
                <p className="card-text">Genero: {strGenre}</p>
                <h2 className="card-text">Biografia:</h2>
                <p className="card-text">{strBiographyES || strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Info;