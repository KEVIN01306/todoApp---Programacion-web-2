// En src/Row.jsx

const Row = ({ values, cambiarEstado, eliminarTarea }) => {
    const handleEstadoChange = (e) => {
        cambiarEstado(values.id, e.target.value);
    };

    const handleEliminarClick = () => {
        eliminarTarea(values.id);
    };

    return (
        <>
            <tr className={ values.estado == "Completadas" ? "table-success" : ""}>
                <td style={{ width: "400px" }} className="text-truncate">
                    {values.tarea}
                </td>
                <td style={{ width: "100px" }}>
                    <div className="input-group mb-3">
                        <select
                            className="form-select"
                            value={values.estado}
                            onChange={handleEstadoChange}
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completadas">Completadas</option>
                        </select>
                        <button
                            className="btn btn-danger d-flex justify-content-center"
                            type="button"
                            onClick={handleEliminarClick}
                        >
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Row;