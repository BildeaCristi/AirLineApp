package airlineapp.airlineapp.entity;

import jakarta.persistence.*;

@Table(name = "Clienti")
@Entity
public class Clienti {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idclient")
    private int idclient;
    @Column(name="nume")
    private String nume;
    @Column(name="statut")
    private String statut;
    @Column(name="adresa")
    private String adresa;

    @Column(name="telefon")
    private String telefon;

    public Clienti(String nume, String statut, String adresa, String telefon) {
        this.nume = nume;
        this.statut = statut;
        this.adresa = adresa;
        this.telefon = telefon;
    }

    public Clienti() {

    }

    public Clienti(int idclient, String nume, String statut, String adresa, String telefon) {
        this.idclient = idclient;
        this.nume = nume;
        this.statut = statut;
        this.adresa = adresa;
        this.telefon = telefon;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public int getIdclient() {
        return idclient;
    }

    public void setIdclient(int idclient) {
        this.idclient = idclient;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    @Override
    public String toString() {
        return "Clienti{" +
                "idclient=" + idclient +
                ", nume='" + nume + '\'' +
                ", statut='" + statut + '\'' +
                ", adresa='" + adresa + '\'' +
                ", telefon='" + telefon + '\'' +
                '}';
    }
}
