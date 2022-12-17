export default function ComponenteListaAuto() { 
    return (
        <div className="container">
            <h1>Lista Libros</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Categoria</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Mark</td>
                            <td><a href="#" className="btn btn-success">Actualizar</a></td>
                            <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Jacob</td>
                            <td><a href="#" className="btn btn-success">Actualizar</a></td>
                            <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>Bird</td>
                            <td>Larry</td>
                            <td><a href="#" className="btn btn-success">Actualizar</a></td>
                            <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            <a className="btn btn-primary" href="autos/registrarAuto">Registrar Auto</a>
        </div>
    );
}