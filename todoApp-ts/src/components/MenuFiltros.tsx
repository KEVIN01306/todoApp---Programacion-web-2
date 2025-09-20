import type { ChangeEvent } from "react";

interface MenuFiltrosProps {
    filtroActual: string;
    onFiltroChange: (nuevoFiltro: string) => void;
}

const MenuFiltros = ({ filtroActual, onFiltroChange }: MenuFiltrosProps) => {
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onFiltroChange(e.target.value)}
                value={filtroActual}
                style={{ width: "250px" }}
                aria-label="Large select example"
            >
                <option value="Todas">Todas</option>
                <option value="Pendiente">Pendientes</option>
                <option value="Completadas">Completadas</option>
            </select>
        </>
    );
};

export default MenuFiltros;
