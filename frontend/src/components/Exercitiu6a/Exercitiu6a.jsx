import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu6a.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu6aTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/cupoane/6a');
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
                            <th colSpan={2} id="numetabel">Tabel Exercitiu 6a</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Nr. Zbor</th>
                            <th>Suma</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([nr_zbor, suma]) => (
                            <tr key={nr_zbor + suma}>
                                <td>{nr_zbor}</td>
                                <td>{suma}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu6aTable;
