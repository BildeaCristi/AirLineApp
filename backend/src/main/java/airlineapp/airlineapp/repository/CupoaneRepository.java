package airlineapp.airlineapp.repository;

import airlineapp.airlineapp.entity.Cupoane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CupoaneRepository extends JpaRepository<Cupoane, Long> {
    @Query("select c from Cupoane c")
    List<Cupoane> getAllCupoane();

    @Query("SELECT A.nrbilet, A.nrzbor AS nrzbor1, A.plecare AS plecare1, B.nrzbor AS nrzbor2, B.plecare AS plecare2 "
            + "FROM Cupoane A "
            + "JOIN Cupoane B "
            + "ON A.nrbilet = B.nrbilet "
            + "WHERE A.nrzbor < B.nrzbor")
    List<Object[]> getPerechiZboruri();

    @Query("SELECT nrzbor, SUM(loc) "
            + "FROM Cupoane "
            + "WHERE YEAR(plecare) = 2022 "
            + "GROUP BY nrzbor")
    List<Object[]>getValoareZboruri();
}