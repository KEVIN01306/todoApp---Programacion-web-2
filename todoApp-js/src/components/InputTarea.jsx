


const InputTarea = ({agregarTarea, tareaInputEstado}) => {

    return(
        <>
            <div className="m-5">
                <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea" value={tareaInputEstado.newTarea} 
                        onChange={(e) => tareaInputEstado.setNewTarea(e.target.value)}>
                    </textarea>
                </div>
            </div>
            
                <button className="btn btn-success" onClick={agregarTarea}>
                    Agregar Tarea
                </button>
        </>
    )
}



export default InputTarea;