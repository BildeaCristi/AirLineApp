import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu4a.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu4aTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/4a');
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
                            <th colSpan={10} id="numetabel">Tabel Exercitiu 4a</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Idclient</th>
                            <th>Nume</th>
                            <th>Nr. Zbor</th>
                            <th>Aparat Zbor</th>
                            <th>Sursa</th>
                            <th>Destinatia</th>
                            <th>De la</th>
                            <th>La</th>
                            <th>Clasa Efectiva</th>
                            <th>Loc</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([idclient, nume, nrzbor, aparat_zbor, sursa, destinatia, de_la, la, clasa_efectiva, loc]) => (
                            <tr key={idclient + nume + nrzbor + aparat_zbor + sursa + destinatia + de_la + la + clasa_efectiva + loc}>
                                <td>{idclient}</td>
                                <td>{nume}</td>
                                <td>{nrzbor}</td>
                                <td>{aparat_zbor}</td>
                                <td>{sursa}</td>
                                <td>{destinatia}</td>
                                <td>{de_la}</td>
                                <td>{la}</td>
                                <td>{clasa_efectiva}</td>
                                <td>{loc}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu4aTable;
