import axios from "axios";
import { useEffect, useState } from "react";
import "./Exercitiu3a.css";
import "../AllTablesComponent/AllTablesComponent.css"
import "../../App.css"
import TaskCard from "../TaskCard/TaskCard";

function Exercitiu3aTable() {
    async function getBilete() {
        try {
            const response = await axios.get('http://localhost:3001/bilete/3a');
            setBileteData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [bileteData, setBileteData] = useState([]);
    useEffect(() => {
        getBilete();
    }, []);

    return (
        <>
            <div className="backgroundImage">
            <div className="center fontText" >
                <table className="tabelForm">
                    <thead>
                    <tr>
                        <th colSpan={3} id="numetabel">Tabel Exercitiu 3a</th>
                    </tr>
                    <tr className="tableFormColor">
                        <th>Clasa</th>
                        <th>Sursa</th>
                        <th>Destinatia</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bileteData.map(([clasa, sursa, destinatia]) => (
                        <tr key={clasa + sursa + destinatia}>
                            <td>{clasa}</td>
                            <td>{sursa}</td>
                            <td>{destinatia}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
                </div>
        </>
    );
}

export default Exercitiu3aTable;
