import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu5a.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu5aTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/5a');
            setTableData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="backgroundImage">
                <div className="center fontText">
                    <table className="tabelForm">
                        <thead>
                        <tr>
                            <th colSpan={1} id="numetabel">Tabel Exercitiu 5a</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Nume</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([nume]) => (
                            <tr key={nume}>
                                <td>{nume}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu5aTable;
