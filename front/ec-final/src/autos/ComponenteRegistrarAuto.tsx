export default function ComponenteRegistrarAuto(){
    return(
        <div>
            <h1>Registro Autos</h1>
            <form className="form-control">
                <div className="row">
                    <div className="col-6 mt-2">
                        <label className="form-label">Marca:</label>
                        <input type="text" className="form-control" id="txtMar" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-2">
                        <label className="form-label">Precio:</label>
                        <input type="text" className="form-control" id="txtMar" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-2">
                        <label className="form-label">Estado:</label>
                        <div className="col-6 form-check">
                            <input type="checkbox" className="form-check-input" id="chkEst" />
                            <label className="form-check-label">Habilitado</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-2">
                        <label className="form-label">Categoria:</label>
                        <input type="text" className="form-control" id="txtMar" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-2">
                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}