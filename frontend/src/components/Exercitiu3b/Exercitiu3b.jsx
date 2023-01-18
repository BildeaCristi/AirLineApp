import axios from "axios";
import {useEffect, useState} from "react";
import "./Exercitiu3b.css";
import "../AllTablesComponent/AllTablesComponent.css"

function Exercitiu3bTable() {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/zboruri/3b');
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
                            <th colSpan={3} id="numetabel">Tabel Exercitiu 3b</th>
                        </tr>
                        <tr className="tableFormColor">
                            <th>Aparat Zbor</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map(([aparatZbor]) => (
                            <tr key={aparatZbor}>
                                <td>{aparatZbor}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Exercitiu3bTable;
