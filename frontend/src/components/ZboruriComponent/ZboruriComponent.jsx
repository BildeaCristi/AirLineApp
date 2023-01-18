import axios from "axios";
import {useEffect, useState} from "react";
import "../AllTablesComponent/AllTablesComponent.css"
import "./ZboruriComponent.css"
class Zboruri {
    constructor(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) {
        this.nrzbor = nrzbor;
        this.plecare = plecare;
        this.sosire = sosire;
        this.de_la = de_la;
        this.la = la;
        this.aparat_zbor = aparat_zbor;
        this.nr_locuri = nr_locuri;
    }
}
function createZborRow(zboruriData) {
    return (
        <tr>
            <td>{zboruriData.nrzbor}</td>
            <td>{zboruriData.plecare}</td>
            <td>{zboruriData.sosire}</td>
            <td>{zboruriData.de_la}</td>
            <td>{zboruriData.la}</td>
            <td>{zboruriData.aparat_zbor}</td>
            <td>{zboruriData.nr_locuri}</td>
        </tr>
    )
}

function ZboruriComponent() {

    async function getZboruri() {
        try {
            const response = await axios.get('http://localhost:3001/zboruri/all');
            setZboruriData(response.data.map(z => new Zboruri(z.nrzbor, z.plecare, z.sosire, z.de_la, z.la, z.aparat_zbor, z.nr_locuri)));
            console.log(Zboruri);
        } catch (error) {
            console.log(error);
        }
    }

    const [zboruriData, setZboruriData] = useState([]);
    useEffect(() => {getZboruri()}, [])

    return (
        <>
            <div className="center fontText">
                <table className="tabelForm">
                    <thead>
                    <tr>
                        <th colSpan={7} id="numetabel">Tabel Zboruri</th>
                    </tr>
                    <tr className="tableFormColor">
                        <td>Nr.Zbor</td>
                        <td>Plecare</td>
                        <td>Sosire</td>
                        <td>De la</td>
                        <td>La</td>
                        <td>Aparat Zbor</td>
                        <td>Nr. Locuri</td>
                    </tr>
                    </thead>
                    <tbody>
                    {zboruriData.map(zboruriData => createZborRow(zboruriData))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default ZboruriComponent;