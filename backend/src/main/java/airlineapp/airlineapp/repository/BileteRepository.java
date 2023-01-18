package airlineapp.airlineapp.repository;

import airlineapp.airlineapp.entity.Bilete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BileteRepository extends JpaRepository<Bilete, Long> {
    @Query("select b from Bilete b")
    List<Bilete> getAllBilete();

    @Query("SELECT clasa, sursa, destinatia "
            + "FROM Bilete"
            + " WHERE idclient BETWEEN 100 and 200"
            + "ORDER BY valoare DESC, sursa ASC")
    List<Object[]>getClasaSursaDestinatia();




}

