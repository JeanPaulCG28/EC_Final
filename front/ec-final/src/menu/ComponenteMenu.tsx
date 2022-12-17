export default function ComponenteMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Autoland</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/clientes">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/autos">Autos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/catAutos">Categoria Autos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Empleados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Venta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Detalle de Venta</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}