import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu4b.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu4Table() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/cupoane/4b');
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
                            <th colSpan={5} id="numetabel">Tabel Exercitiu 4b</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Nr. Bilet</th>
                            <th>Nr. Zbor1</th>
                            <th>Plecare1</th>
                            <th>Nr. Zbor2</th>
                            <th>Plecare2</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([nrbilet, nrzbor1, plecare1, nrzbor2, plecare2]) => (
                            <tr key={nrbilet + nrzbor1 + plecare1 + nrzbor2 + plecare2}>
                                <td>{nrbilet}</td>
                                <td>{nrzbor1}</td>
                                <td>{plecare1}</td>
                                <td>{plecare2}</td>
                                <td>{nrzbor2}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu4Table;
