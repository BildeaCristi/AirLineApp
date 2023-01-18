import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu5b.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu5bTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/5b');
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
                            <th colSpan={6} id="numetabel">Tabel Exercitiu 5b</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Nr. Bilet</th>
                            <th>Clasa</th>
                            <th>Valoare</th>
                            <th>Sursa</th>
                            <th>Destinatia</th>
                            <th>Nume</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([nrbilet, clasa, valoare, sursa, destinatia, nume]) => (
                            <tr key={nrbilet + clasa + valoare + sursa + destinatia + nume}>
                                <td>{nrbilet}</td>
                                <td>{clasa}</td>
                                <td>{valoare}</td>
                                <td>{sursa}</td>
                                <td>{destinatia}</td>
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

export default Exercitiu5bTable;
