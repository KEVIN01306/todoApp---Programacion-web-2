import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import InputTarea from "./InputTarea";
import TableList from "./Table";
import MenuFiltros from "./MenuFiltros";

export interface Tarea {
    id: number;
    estado: string;
    tarea: string;
}

const TodoList = () => {
    const [newTarea, setNewTarea] = useState<string>("");
    const [listaTareas, setListaTareas] = useState<Tarea[]>([]);
    const [filtro, setFiltro] = useState<string>("Todas");

    const isInitialMount = useRef(true);

    useEffect(() => {
        try {
            const storedTareas = localStorage.getItem('listaTareas');
            if (storedTareas && storedTareas !== "undefined") {
                const parsedTareas: Tarea[] = JSON.parse(storedTareas);
                if (Array.isArray(parsedTareas)) {
                    setListaTareas(parsedTareas);
                } else {
                    setListaTareas([]);
                }
            }
        } catch (error) {
            console.error("Fallo al cargar de localStorage:", error);
            setListaTareas([]);
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        try {
            localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
        } catch (error) {
            console.error("Fallo en el localStorage:", error);
        }
    }, [listaTareas]);

    const agregarTarea = () => {
        if (newTarea.trim() !== '') {
            const newId = listaTareas.length > 0
                ? listaTareas[listaTareas.length - 1].id + 1
                : 1;

            const newTareaAgregar: Tarea = {
                id: newId,
                estado: "Pendiente",
                tarea: newTarea
            };

            setListaTareas([...listaTareas, newTareaAgregar]);
            setNewTarea('');
        }
    };

    const handlerNewTarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTarea(e.target.value);
    };

    const eliminarTarea = (id: number) => {
        setListaTareas(prev => prev.filter(tarea => tarea.id !== id));
    };

    const cambiarEstado = (id: number, nuevoEstado: string) => {
        setListaTareas(prev =>
            prev.map(tarea =>
                tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea
            )
        );
    };

    const handleFiltroChange = (nuevoFiltro: string) => {
        setFiltro(nuevoFiltro);
    };

    const listaFiltrada = listaTareas.filter(tarea => {
        if (filtro === 'Todas') {
            return true;
        }
        return tarea.estado === filtro;
    });

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column row">
                <div className="col-6 d-flex justify-content-center align-items-center flex-column m-2">
                    <InputTarea agregarTarea={agregarTarea} tareaInputEstado={{ newTarea, handlerNewTarea }} />
                </div>
                <div className="col-12 row d-flex justify-content-start align-items-center m-2">
                    <MenuFiltros filtroActual={filtro} onFiltroChange={handleFiltroChange} />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center flex-column m-2">
                    <TableList
                        listaTarea={listaFiltrada}
                        cambiarEstado={cambiarEstado}
                        eliminarTarea={eliminarTarea}
                    />
                </div>
            </div>
        </>
    );
};

export default TodoList;
