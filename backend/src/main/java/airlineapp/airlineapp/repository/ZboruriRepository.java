package airlineapp.airlineapp.repository;

import airlineapp.airlineapp.entity.Zboruri;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZboruriRepository extends JpaRepository<Zboruri, Long> {
    @Query("select z from Zboruri z")
    List<Zboruri> getAllZboruri();

    @Query("SELECT aparat_zbor "
            + "FROM Zboruri"
            + " WHERE nr_locuri < 100"
            + "ORDER BY nr_locuri DESC")
    List<Object[]>getAparatDeZbor();
}
