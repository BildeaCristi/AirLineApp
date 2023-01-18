package airlineapp.airlineapp.repository;

import airlineapp.airlineapp.entity.Clienti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ClientiRepository extends JpaRepository<Clienti, Long> {

    @Query("select c from Clienti c")
    List<Clienti> getAllClienti();

    @Query("SELECT c.idclient , c.nume, z.nrzbor, z.aparat_zbor, b.sursa, b.destinatia, z.de_la, z.la, cu.clasa_efectiva , cu.loc FROM Clienti c " +
            "JOIN Bilete b ON c.idclient = b.idclient " +
            "JOIN Cupoane cu ON b.nrbilet = cu.nrbilet " +
            "JOIN Zboruri z ON cu.nrzbor = z.nrzbor " +
            "WHERE c.nume = 'John Doe'  AND (z.de_la='London Airport' OR z.la='London Airport') and b.destinatia <> 'London Airport'")
    List<Object[]> getDetaliiCalatorie();

    @Query("SELECT C.nume "
            + "FROM Clienti C "
            + "WHERE EXISTS (SELECT B.nrbilet "
            + "              FROM Bilete B "
            + "              WHERE B.clasa = 'Business' AND B.valoare = (SELECT MIN(valoare) "
            + "                                                         FROM Bilete "
            + "                                                         WHERE clasa = 'Business') "
            + "                                                         AND B.idclient = C.idclient)")
    List<Object[]> getBileteCostMic();

    @Query("SELECT B.nrbilet, B.clasa, B.valoare, B.sursa, B.destinatia, C.nume "
            + "FROM Bilete B "
            + "JOIN Clienti C ON B.idclient = C.idclient "
            + "WHERE C.statut = (SELECT statut FROM Clienti WHERE nume = 'John Doe') "
            + "AND B.destinatia = 'London Airport'")
    List<Object[]>getStatutBilete();

    @Query("SELECT C.nume, MIN(B.valoare) as valoare_minima, ROUND(AVG(B.valoare), 2) as valoare_medie, MAX(B.valoare) as valoare_maxima "
            + "FROM Clienti C "
            + "JOIN Bilete B ON C.idclient = B.idclient "
            + "GROUP BY C.nume")
    List<Object[]>getValBilete();

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Clienti WHERE idclient NOT IN " +
            "(SELECT idclient FROM Bilete)", nativeQuery = true)
    void deleteClientiBilete();
}
