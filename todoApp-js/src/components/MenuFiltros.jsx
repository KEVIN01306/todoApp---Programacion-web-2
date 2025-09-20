

const MenuFiltros = ({filtroActual, onFiltroChange}) => {

    return(
        <>
        <select class="form-select form-select-lg mb-3" onChange={(e) => onFiltroChange(e.target.value)} value={filtroActual}  style={{width: "250px"}}aria-label="Large select example">
            <option value="Todas">Todas</option>
            <option value="Pendiente">Pendientes</option>
            <option value="Completadas">Completadas</option>
        </select>
        </>
    )
}



export default MenuFiltros;