

const Row = () => {



    return (
        <>
            <tr className="">
                <td style={{ width: "400px" }} className="text-truncate">
                    Lavar lo lore y además
                </td>
                <td style={{ width: "200px" }}>
                    <div className="input-group mb-3">
                        <select className="form-select">
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completadas">Completadas</option>
                        </select>
                        <button
                            className="btn btn-danger d-flex justify-content-center"
                            type="submit"
                        >
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}


export default Row;