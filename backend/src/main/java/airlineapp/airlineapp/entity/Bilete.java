package airlineapp.airlineapp.entity;

import jakarta.persistence.*;

@Table(name = "Bilete")
@Entity
public class Bilete {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="nrbilet")
    private int nrbilet;

    @Column(name="clasa")
    private String clasa;
    @Column(name="valoare")
    private int valoare;
    @Column(name="sursa")
    private String sursa;
    @Column(name="destinatia")
    private String destinatia;

    @Column(name="idclient")
    private int idclient;

    public Bilete(int nrbilet, String clasa, int valoare, String sursa, String destinatia, int idclient) {
        this.nrbilet = nrbilet;
        this.clasa = clasa;
        this.valoare = valoare;
        this.sursa = sursa;
        this.destinatia = destinatia;
        this.idclient = idclient;
    }

    public Bilete() {

    }

    public int getNrbilet() {
        return nrbilet;
    }

    public void setNrbilet(int nrbilet) {
        this.nrbilet = nrbilet;
    }

    public String getClasa() {
        return clasa;
    }

    public void setClasa(String clasa) {
        this.clasa = clasa;
    }

    public int getValoare() {
        return valoare;
    }

    public void setValoare(int valoare) {
        this.valoare = valoare;
    }

    public String getSursa() {
        return sursa;
    }

    public void setSursa(String sursa) {
        this.sursa = sursa;
    }

    public String getDestinatia() {
        return destinatia;
    }

    public void setDestinatia(String destinatia) {
        this.destinatia = destinatia;
    }

    public int getClient() {
        return idclient;
    }

    public void setClient(int client) {
        this.idclient = client;
    }

    @Override
    public String toString() {
        return "Bilete{" +
                "nrbilet=" + nrbilet +
                ", clasa='" + clasa + '\'' +
                ", valoare=" + valoare +
                ", sursa='" + sursa + '\'' +
                ", destinatia='" + destinatia + '\'' +
                ", client=" + idclient +
                '}';
    }
}
