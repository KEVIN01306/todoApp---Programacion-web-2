
import Row from "./Row";




const TableList = ( {listaTarea}) => {

    console.log(listaTarea)

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}> 
            <table className="table table-striped" style={{ maxWidth: "800px" }}>
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
                    <Row/>
                    <Row/>
                </tbody>
            </table>
        </div>
    );
};

export default TableList;
