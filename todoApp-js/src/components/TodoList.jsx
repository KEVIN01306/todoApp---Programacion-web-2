import { useEffect, useState } from "react";
import InputTarea from "./InputTarea";
import TableList from "./Table";




const TodoList = () => {

    const [newTarea, setNewTarea] = useState("dadaaddasds")

    const [listaTareas, setListaTareas] = useState()

    useEffect(() => {
        try {
            const storedTareas = localStorage.getItem('listaTareas');
            if (storedTareas) {
                setListaTareas(JSON.parse(storedTareas));
            }
        } catch (error) {
            console.error("Failed to load tasks from localStorage:", error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
        } catch (error) {
            console.error("Failed to save tasks to localStorage:", error);
        }
    }, [listaTareas]);


    const agregarTarea = () => {
        if (newTarea.trim() !== '') {
            setListaTareas([...listaTareas, newTarea]);
            setNewTarea('');
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <InputTarea agregarTarea={agregarTarea} tareaInputEstado={{ newTarea, setNewTarea }} />
                <TableList listaTarea={listaTareas} />
            </div>
        </>
    )
}


export default TodoList;