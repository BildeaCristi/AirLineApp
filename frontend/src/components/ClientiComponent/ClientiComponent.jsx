import axios from "axios";
import {useEffect, useState} from "react";
import "./ClientiComponent.css"
import "../AllTablesComponent/AllTablesComponent.css"

class Clienti {
    constructor(idclient, nume, statut, adresa, telefon) {
        this.idclient = idclient;
        this.nume = nume;
        this.statut = statut;
        this.adresa = adresa;
        this.telefon = telefon;
    }
}

function createClientRow(clientData) {
    return (
        <tr key={clientData.idclient}>
            <td>{clientData.idclient}</td>
            <td>{clientData.nume}</td>
            <td>{clientData.statut}</td>
            <td>{clientData.adresa}</td>
            <td>{clientData.telefon}</td>
        </tr>
    )
}
function ClientiComponent() {
    async function getClienti() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/all');
            console.log(response.data);
            setClientiData(response.data.map(c => new Clienti(c.idclient, c.nume, c.statut, c.adresa, c.telefon)));
            console.log(Clienti);
        } catch (error) {
            console.log(error);
        }
    }


    const [clientiData, setClientiData] = useState([]);
    useEffect(() => {
        getClienti()
    }, []);

    return (
        <>
            <div className="center fontText">
                <table className="tabelForm">
                    <thead>
                    <tr>
                        <th colSpan={5} id="numetabel">Tabel Clienti</th>
                    </tr>
                    <tr className="tableFormColor">
                        <td>Id</td>
                        <td>Nume</td>
                        <td>Statut</td>
                        <td>Adresa</td>
                        <td>Telefon</td>
                    </tr>
                    </thead>
                    <tbody>
                    {clientiData.map(clientiData => createClientRow(clientiData))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default ClientiComponent;