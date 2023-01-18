package airlineapp.airlineapp.entity;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.SimpleDateFormat;

@Table(name = "Cupoane")
@Entity
public class Cupoane {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idcupon")
    private int idcupon;

    @Column(name="nrbilet")
    private int nrbilet;

    @Column(name="nrzbor")
    private String nrzbor;

    @Column(name="plecare")
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm")
    private java.time.LocalDateTime plecare;

    @Column(name="clasa_efectiva")
    private String clasa_efectiva;

    @Column(name="loc")
    private int loc;

    public Cupoane(int idcupon, int nrbilet, String nrzbor, java.time.LocalDateTime plecare, String clasa_efectiva, int loc) {
        this.idcupon = idcupon;
        this.nrbilet = nrbilet;
        this.nrzbor = nrzbor;
        this.plecare = plecare;
        this.clasa_efectiva = clasa_efectiva;
        this.loc = loc;
    }

    public Cupoane() {

    }

    public int getBilet() {
        return nrbilet;
    }

    public void setBilet(int nrbilet) {
        this.nrbilet = nrbilet;
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

    public String getClasa_efectiva() {
        return clasa_efectiva;
    }

    public void setClasa_efectiva(String clasa_efectiva) {
        this.clasa_efectiva = clasa_efectiva;
    }

    public int getLoc() {
        return loc;
    }

    public void setLoc(int loc) {
        this.loc = loc;
    }

    @Override
    public String toString() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm");
        String formattedPlecare = formatter.format(plecare);
        return "Cupoane{" +
                "nrbilet=" + nrbilet +
                ", nrzbor='" + nrzbor + '\'' +
                ", plecare=" + formattedPlecare +
                ", clasa_efectiva='" + clasa_efectiva + '\'' +
                ", loc=" + loc +
                '}';
    }
}
