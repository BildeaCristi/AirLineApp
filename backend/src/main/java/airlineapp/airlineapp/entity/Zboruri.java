package airlineapp.airlineapp.entity;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.SimpleDateFormat;

@Table(name = "Zboruri")
@Entity
public class Zboruri {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="nrzbor")
    private String nrzbor;

    @Column(name="plecare")
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm")
    private java.time.LocalDateTime plecare;

    @Column(name="sosire")
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm")
    private java.time.LocalDateTime sosire;

    @Column(name="de_la")
    private String de_la;

    @Column(name="la")
    private String la;

    @Column(name="aparat_zbor")
    private String aparat_zbor;

    @Column(name="nr_locuri")
    private int nr_locuri;

    public Zboruri(String nrzbor, java.time.LocalDateTime plecare, java.time.LocalDateTime sosire, String de_la, String la, String aparat_zbor, int nr_locuri) {
        this.nrzbor = nrzbor;
        this.plecare = plecare;
        this.sosire = sosire;
        this.de_la = de_la;
        this.la = la;
        this.aparat_zbor = aparat_zbor;
        this.nr_locuri = nr_locuri;
        System.out.println("Plecare: " + plecare + "Sosire: " + sosire);
    }


    public Zboruri() {

    }

    public String getNrzbor() {
        return nrzbor;
    }

    public void setNrzbor(String nrzbor) {
        this.nrzbor = nrzbor;
    }

    public java.time.LocalDateTime getPlecare() {
        return plecare;
    }

    public void setPlecare(java.time.LocalDateTime plecare) {
        this.plecare = plecare;
    }

    public java.time.LocalDateTime getSosire() {
        return sosire;
    }

    public void setSosire(java.time.LocalDateTime sosire) {
        this.sosire = sosire;
    }

    public String getDe_la() {
        return de_la;
    }

    public void setDe_la(String de_la) {
        this.de_la = de_la;
    }

    public String getLa() {
        return la;
    }

    public void setLa(String la) {
        this.la = la;
    }

    public String getAparat_zbor() {
        return aparat_zbor;
    }

    public void setAparat_zbor(String aparat_zbor) {
        this.aparat_zbor = aparat_zbor;
    }

    public int getNr_locuri() {
        return nr_locuri;
    }

    public void setNr_locuri(int nr_locuri) {
        this.nr_locuri = nr_locuri;
    }

    @Override
    public String toString() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm");
        String formattedPlecare = formatter.format(plecare);
        String formattedSosire = formatter.format(sosire);
        return "Zboruri{" +
                "nrzbor='" + nrzbor + '\'' +
                ", plecare=" + formattedPlecare +
                ", sosire=" + formattedSosire +
                ", de_la='" + de_la + '\'' +
                ", la='" + la + '\'' +
                ", aparat_zbor='" + aparat_zbor + '\'' +
                ", nr_locuri=" + nr_locuri +
                '}';
    }
}
