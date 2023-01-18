import axios from "axios";
import {useEffect, useState} from "react";
import "../AllTablesComponent/AllTablesComponent.css"
import "./BileteComponent.css"

class Bilete {
    constructor(nrbilet, clasa, valoare, sursa, destinatia, client) {
        this.nrbilet = nrbilet;
        this.clasa = clasa;
        this.valoare = valoare;
        this.sursa = sursa;
        this.destinatia = destinatia;
        this.client = client;
    }
}

function createBiletRow(bileteData) {
    return (
        <tr key={bileteData.nrbilet}>
            <td>{bileteData.nrbilet}</td>
            <td>{bileteData.clasa}</td>
            <td>{bileteData.valoare}</td>
            <td>{bileteData.sursa}</td>
            <td>{bileteData.destinatia}</td>
            <td>{bileteData.client}</td>
        </tr>
    )
}

function BileteComponent() {
    async function getBilete() {
        try {
            const response = await axios.get('http://localhost:3001/bilete/all');
            setBileteData(response.data.map(b => new Bilete(b.nrbilet, b.clasa, b.valoare, b.sursa, b.destinatia, b.client)));
            console.log(Bilete);
        } catch (error) {
            console.log(error);
        }
    }

    const [bileteData, setBileteData] = useState([]);
    useEffect(() => {getBilete()}, [])

    return (
        <>
            <div className="center fontText">
                <table className="tabelForm">
                    <thead>
                    <tr>
                        <th colSpan={6} id="numetabel">Tabel Bilete</th>
                    </tr>
                    <tr className="tableFormColor">
                        <td>Nr.Bilet</td>
                        <td>Clasa</td>
                        <td>Valoare</td>
                        <td>Sursa</td>
                        <td>Destinatie</td>
                        <td>Idclient</td>
                    </tr>
                    </thead>
                    <tbody>
                    {bileteData.map(bileteData => createBiletRow(bileteData))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default BileteComponent;