import Row from "./Row";
import type{ Tarea } from "./TodoList";

interface TableListProps {
    listaTarea: Tarea[];
    cambiarEstado: (id: number, nuevoEstado: string) => void;
    eliminarTarea: (id: number) => void;
}

const TableList = ({ listaTarea, cambiarEstado, eliminarTarea }: TableListProps) => {
    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <table className="table table-striped" style={{ width: "1200px" }}>
                <thead>
                    <tr>
                        <th style={{ maxWidth: "400px" }} className="text-truncate">
                            Tarea
                        </th>
                        <th style={{ maxWidth: "200px" }} className="text-truncate">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listaTarea && listaTarea.length > 0 ? (
                        listaTarea.map((tarea) => (
                            <Row
                                key={tarea.id}
                                values={tarea}
                                cambiarEstado={cambiarEstado}
                                eliminarTarea={eliminarTarea}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center">
                                No hay tareas
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;
