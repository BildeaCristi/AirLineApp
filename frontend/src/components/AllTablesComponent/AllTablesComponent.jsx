import axios from "axios";
import {useEffect, useState} from "react";
import "../../pages/ClientiComponent.css"

class Clienti {
    constructor(idclient, nume, statut, adresa, telefon) {
        this.idclient = idclient;
        this.nume = nume;
        this.statut = statut;
        this.adresa = adresa;
        this.telefon = telefon;
    }
}

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

class Bilete {
    constructor(nrbilet, clasa, valoare, sursa, destinatia, idclient) {
        this.nrbilet = nrbilet;
        this.clasa = clasa;
        this.valoare = valoare;
        this.sursa = sursa;
        this.destinatia = destinatia;
        this.idclient = idclient;
    }
}

class Cupoane {
    constructor(nrbilet, nrzbor, plecare, clasa_efectiva, loc) {
        this.nrbilet = nrbilet;
        this.nrzbor = nrzbor;
        this.plecare = plecare;
        this.clasa_efectiva = clasa_efectiva;
        this.loc = loc;
    }
}

function createClientRow(Clienti) {
    return (
        <tr>
            <td>{Clienti.idclient}</td>
            <td>{Clienti.nume}</td>
            <td>{Clienti.statut}</td>
            <td>{Clienti.adresa}</td>
            <td>{Clienti.telefon}</td>
        </tr>
    )
}

function createZborRow(Zboruri) {
    return (
        <tr>
            <td>{Zboruri.nrzbor}</td>
            <td>{Zboruri.plecare}</td>
            <td>{Zboruri.sosire}</td>
            <td>{Zboruri.de_la}</td>
            <td>{Zboruri.la}</td>
            <td>{Zboruri.aparat_zbor}</td>
            <td>{Zboruri.nr_locuri}</td>
        </tr>
    )
}

function createBiletRow(Bilete) {
    return (
        <tr>
            <td>{Bilete.nrbilet}</td>
            <td>{Bilete.clasa}</td>
            <td>{Bilete.valoare}</td>
            <td>{Bilete.sursa}</td>
            <td>{Bilete.destinatia}</td>
            <td>{Bilete.idclient}</td>
        </tr>
    )
}

function createCuponRow(Cupoane) {
    return (
        <tr>
            <td>{Cupoane.nrbilet}</td>
            <td>{Cupoane.nrzbor}</td>
            <td>{Cupoane.plecare}</td>
            <td>{Cupoane.clasa_efectiva}</td>
            <td>{Cupoane.loc}</td>
        </tr>
    )
}

function ClientiComponent() {
    async function getClienti() {
        try {
            const response = await axios.get('http://localhost:3001/clienti/all');
            setClientiData(response.data.map(c => new Clienti(c.idclient, c.nume, c.statut, c.adresa, c.telefon)));
            console.log(Clienti);
        } catch (error) {
            console.log(error);
        }
    }

    async function getZboruri() {
        try {
            const response = await axios.get('http://localhost:3001/zboruri/all');
            setZboruriData(response.data.map(z => new Zboruri(z.nrzbor, z.plecare, z.sosire, z.de_la, z.la, z.aparat_zbor, z.nr_locuri)));
            console.log(Zboruri);
        } catch (error) {
            console.log(error);
        }
    }

    async function getBilete() {
        try {
            const response = await axios.get('http://localhost:3001/bilete/all');
            setBileteData(response.data.map(b => new Bilete(b.nrbilet, b.clasa, b.valoare, b.sursa, b.destinatia, b.idclient)));
            console.log(Bilete);
        } catch (error) {
            console.log(error);
        }
    }

    async function getCupoane() {
        try {
            const response = await axios.get('http://localhost:3001/cupoane/all');
            setCupoaneData(response.data.map(c => new Cupoane(c.nrbilet, c.nrzbor, c.plecare, c.clasa_efectiva, c.loc)));
            console.log(Cupoane);
        } catch (error) {
            console.log(error);
        }
    }


    const [clientiData, setClientiData] = useState([]);
    const [zboruriData, setZboruriData] = useState([]);
    const [bileteData, setBileteData] = useState([]);
    const [cupoaneData, setCupoaneData] = useState([]);
    useEffect(() => {
        getClienti()
    }, [])

    function getDataClienti() {
        return getClienti();
    }

    function getDataZboruri() {
        return getZboruri();
    }

    function getDataBilete() {
        return getBilete();
    }

    function getDataCupoane() {
        return getCupoane();
    }

    return (
        <>
            <div className="backgroundImage">
                <div className="center">
                    <table className="tabelForm">
                        <thead>
                        <tr>
                            <th colSpan={5} id="numetabel">Tabel Clienti</th>
                        </tr>
                        <tr className="tableFormColor">
                            {clientiData.map((header) => <td>{header}</td>)}</tr>
                        </thead>
                        <tbody>
                        {
                            clientiData.map(
                                clientiData => {
                                    console.log("Clienti ", clientiData);
                                    if (clientiData instanceof Clienti)
                                        return createClientRow(clientiData);
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ClientiComponent;