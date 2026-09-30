function TarjetaAlumno({nombre, carrera, correo}){
    return (
        <article>
            <h2>{nombre}</h2>
            <p>{carrera}</p>
            <p>{correo}</p>
        </article>
    )
}

export default TarjetaAlumno