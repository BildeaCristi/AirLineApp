import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu6b.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu6bTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/6b');
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
                            <th colSpan={4} id="numetabel">Tabel Exercitiu 6b</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Nume</th>
                            <th>Valoare minima</th>
                            <th>Valoare medie</th>
                            <th>Valoare maxima</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([nume, min, med, max]) => (
                            <tr key={nume + min + med + max}>
                                <td>{nume}</td>
                                <td>{min}</td>
                                <td>{med}</td>
                                <td>{max}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu6bTable;
