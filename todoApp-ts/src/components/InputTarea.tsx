import type { ChangeEvent } from "react";

interface InputTareaProps {
    agregarTarea: () => void;
    tareaInputEstado: {
        newTarea: string;
        handlerNewTarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    };
}

const InputTarea = ({ agregarTarea, tareaInputEstado }: InputTareaProps) => {
    return (
        <>
            <div className="m-5">
                <div className="input-group">
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        value={tareaInputEstado.newTarea}
                        onChange={tareaInputEstado.handlerNewTarea}
                    />
                </div>
            </div>

            <button className="btn btn-success" onClick={agregarTarea}>
                Agregar Tarea
            </button>
        </>
    );
};

export default InputTarea;
