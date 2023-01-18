import axios from "axios";
import {useEffect, useState} from "react";
import "../../components/AllTablesComponent/AllTablesComponent.css"
import "../CupoaneComponent/CupoaneComponent.css"

class Cupoane {
    constructor(nrzbor, plecare, clasa_efectiva, loc, bilet) {
        this.nrzbor = nrzbor;
        this.plecare = plecare;
        this.clasa_efectiva = clasa_efectiva;
        this.loc = loc;
        this.bilet = bilet;
    }
}

function createCuponRow(cupoaneData) {
    return (
        <tr key={cupoaneData.nrzbor}>
            <td>{cupoaneData.nrzbor}</td>
            <td>{cupoaneData.plecare}</td>
            <td>{cupoaneData.clasa_efectiva}</td>
            <td>{cupoaneData.loc}</td>
            <td>{cupoaneData.bilet}</td>
        </tr>
    )
}

function CupoaneComponent() {

    async function getCupoane() {
        try {
            const response = await axios.get('http://localhost:3001/cupoane/all');
            setCupoaneData(response.data.map(c => new Cupoane(c.bilet, c.nrzbor, c.plecare, c.clasa_efectiva, c.loc)));
            console.log(Cupoane);
        } catch (error) {
            console.log(error);
        }
    }


    const [cupoaneData, setCupoaneData] = useState([]);
    useEffect(() => {getCupoane()}, [])

    return (
        <>
            <div className="center fontText">
                <table className="tabelForm">
                    <thead>
                    <tr>
                        <th colSpan={5} id="numetabel">Tabel Cupoane</th>
                    </tr>
                    <tr className="tableFormColor">
                        <td>Nr. Bilet</td>
                        <td>Nr. Zbor</td>
                        <td>Plecare</td>
                        <td>Clasa Efectiva</td>
                        <td>Loc</td>
                    </tr>
                    </thead>
                    <tbody>
                    {cupoaneData.map(cupoaneData => createCuponRow(cupoaneData))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default CupoaneComponent;