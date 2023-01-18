--BILET S15
--Bildea Ioan Cristian

---------------------Table Clienti 15.01 a)-------------------


CREATE TABLE Clienti(
    idclient INT NOT NULL,
    nume VARCHAR(25) NOT NULL,
    statut VARCHAR(3),
    adresa VARCHAR(50) NOT NULL,
    PRIMARY KEY(idclient),
    CHECK (statut='VIP' OR statut='C'),
    UNIQUE(idclient, nume)
);

----------------------Table Bilete 15.01 b)---------------------

CREATE TABLE Bilete (
    nrbilet INT NOT NULL,
    clasa VARCHAR(10) NOT NULL,
    valoare INT NOT NULL,
    sursa VARCHAR(50) NOT NULL,
    destinatia VARCHAR(50) NOT NULL,
    idclient INT,
    PRIMARY KEY(nrbilet),
    FOREIGN KEY(idclient) REFERENCES Clienti(idclient) ON DELETE CASCADE,
    CHECK(clasa = 'Economic' or clasa = 'Business')
);

------------------------Table Zboruri 15.01 c)-------------------

CREATE TABLE Zboruri (
    nrzbor VARCHAR(6) NOT NULL,
    plecare DATE NOT NULL,
    sosire DATE NOT NULL,
    de_la VARCHAR(50) NOT NULL,
    la VARCHAR(100) NOT NULL,
    aparat_zbor VARCHAR(30) NOT NULL,
    nr_locuri INT NOT NULL,
    PRIMARY KEY (nrzbor)
);

--------------------------Table Cupoane 15.01 d)-------------------

CREATE TABLE Cupoane (
    idcupon INT AUTO_INCREMENT,
    nrbilet INT NOT NULL,
    nrzbor VARCHAR(8) NOT NULL,
    plecare DATE NOT NULL,
    clasa_efectiva VARCHAR(10),
    loc INT,
    PRIMARY KEY(idcupon),
    FOREIGN KEY nrzbor_fk (nrzbor) REFERENCES Zboruri(nrzbor) ON DELETE CASCADE,
    FOREIGN KEY nrbilet_fk (nrbilet) REFERENCES Bilete(nrbilet) ON DELETE CASCADE
);


--------------------------15.01 e)-----------------------
-- Sunt adaugate in table la creare 

------------------------15.01 f)-----------------

ALTER TABLE Clienti
ADD telefon VARCHAR(12) NOT NULL;

--------------------------15.02 a)-------------------

ALTER TABLE Zboruri
ADD CHECK (nr_locuri BETWEEN 1 AND 800);

--------------------------15.02 b)----------------

ALTER TABLE Cupoane
ADD CHECK ((LOWER(clasa_efectiva)='business' AND (loc>=1 AND loc<=10)) OR (LOWER(clasa_efectiva)='economic' AND (loc>=1)));

----------------------------------------------- Insertions------------------------------------------------

-------Clienti----------------







INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES(101, 'John Doe', 'London', 'VIP', '0763645999');
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (121, 'Wade Williams', 'Madrid', 'VIP', '0763645836');
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (145, 'Dave Harris', 'Paris', 'C', '074164076');
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (367, 'Robinson Seth', 'Prague', 'C', '076985863');
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (189, 'Walker Dan', 'Bucharest', 'C', '076936225');
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (289, 'Jordan Phill', 'Roma', 'C', '0765111789');

---------Zboruri----------------

INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('AIF213', '2022-12-08 10:00', '2022-12-08 14:00', 'London Airport', 'Madrid Airport', 'AIRBUS 310-325', 100);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('AIF315', '2022-12-08 12:30', '2022-12-08 16:30', 'Roma Airport', 'Barcelona Airport', 'AIRBUS 310-325', 90);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('ACA183', '2022-12-07 18:00', '2022-12-07 22:15', 'Bucharest Airport', 'Berlin Airport', 'AIRBUS A380', 200);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('ACA673', '2022-12-08 10:00', '2022-12-08 16:00', 'Paris Airport', 'Prague Airport', 'AIRBUS A380', 200);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('COA677', '2022-12-13 15:00', '2022-12-13 18:00', 'London Airport', 'Vienna Airport', 'Boeing 777', 30);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('COA977', '2022-12-13 12:00', '2022-12-13 15:00', 'Paris Airport', 'London Airport', 'Boeing 777', 150);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('AIF269', '2022-12-15 10:00', '2022-12-15 16:00', 'Bucharest Airport', 'Barcelona Airport', 'Boeing 777', 50);

----------Bilete-----------------

INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(1, 'Business', 80, 'Paris Airport', 'Vienna Airport', 101);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(2, 'Business', 80, 'London Airport', 'Vienna Airport', 121);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(3, 'Economic', 100, 'Roma Airport', 'Barcelona Airport', 145);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(4, 'Economic', 160, 'Bucharest Airport', 'Barcelona Airport', 189);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(5, 'Economic', 220, 'Paris Airport', 'London Airport', 289);

-------------Cupoane----------------------------

INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(1, 'COA977', '2022-12-13 12:00', 'Business', 1);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(1, 'COA677', '2022-12-13 15:00', 'Business', 2);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(2, 'COA677', '2022-12-13 15:00', 'Business', 3);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(3, 'AIF315', '2022-12-08 12:30', 'Economic', 63);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(4, 'AIF269', '2022-12-15 10:00', 'Economic', 35);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(5, 'COA977', '2022-12-13 12:00', 'Economic', 122);

--- 15.03 a)

SELECT `clasa`, `sursa`, `destinatia`
FROM `Bilete`
WHERE `idclient` BETWEEN 100 and 200
ORDER BY `valoare` DESC, `sursa` ASC


--- 15.03 b)

SELECT `aparat_zbor`
FROM `Zboruri`
WHERE `nr_locuri` < 100
ORDER BY `nr_locuri` DESC

---15.04 a)

SELECT c.idclient , c.nume, z.nrzbor, z.aparat_zbor, b.sursa, b.destinatia, z.de_la, z.la, cu.clasa_efectiva, cu.loc
FROM Clienti c JOIN Bilete b ON c.idclient = b.idclient
JOIN Cupoane cu ON b.nrbilet = cu.nrbilet
JOIN Zboruri z ON cu.nrzbor = z.nrzbor
WHERE c.nume='John Doe' AND (z.de_la='London Airport' OR z.la='London Airport') and b.destinatia!='London Airport';


--- 15.04 b)


INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (315, 'Nathan Paul', 'Prague', 'C', '0765444734');
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('AIF777', '2022-12-13 18:00', '2022-12-13 20:00', 'Vienna Airport', 'Madrid Airport', 'AIRBUS 310-325', 100);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(6, 'Economic', 340,  'Paris Airport', 'Madrid Airport', 289);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(6, 'COA977', '2022-12-13 12:00', 'Business', 4);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(6, 'COA677', '2022-12-13 15:00', 'Business', 5);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(6, 'AIF777', '2022-12-13 18:00', 'Business', 6);

SELECT A.nrbilet, A.nrzbor AS nrzbor1, A.plecare AS plecare1, B.nrzbor AS nrzbor2, B.plecare AS plecare2
FROM Cupoane A 
JOIN Cupoane B 
ON A.nrbilet = B.nrbilet
WHERE A.nrzbor < B.nrzbor;

----15.05 a)

SELECT C.nume
FROM Clienti C
WHERE EXISTS (SELECT B.nrbilet
              FROM Bilete B
              WHERE B.clasa = 'Business' AND B.valoare = (SELECT MIN(valoare)
                                                         FROM Bilete
                                                         WHERE clasa = 'Business')
                                                         AND B.idclient = C.idclient);


------15.05 b)

INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (445, 'Fernado Torres', 'Roma', 'VIP', '0764999123');
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(7, 'Economic', 340,  'Paris Airport', 'London Airport', 445);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(7, 'COA977', '2022-12-13 12:00', 'Economic', 36);

SELECT B.nrbilet, B.clasa, B.valoare, B.sursa, B.destinatia, C.nume
FROM Bilete B
JOIN Clienti C ON B.idclient = C.idclient
WHERE C.statut = (SELECT statut FROM Clienti WHERE nume = 'John Doe')
AND B.destinatia = 'London Airport';

-------15.06 a)

SELECT nrzbor, SUM(loc)
FROM Cupoane
WHERE YEAR(plecare) = 2022
GROUP BY nrzbor;

-------------15.06 b)

INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(9, 'Economic', 50,  'Paris Airport', 'London Airport', 145);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(10, 'Economic', 400,  'Paris Airport', 'London Airport', 145);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(11, 'Economic', 70,  'Paris Airport', 'London Airport', 189);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(12, 'Economic', 600,  'Paris Airport', 'London Airport', 189);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(13, 'Economic', 90,  'Paris Airport', 'London Airport', 445);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(14, 'Economic', 250,  'Paris Airport', 'London Airport', 445);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(15, 'Economic', 70,  'Paris Airport', 'London Airport', 289);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(16, 'Economic', 310,  'Paris Airport', 'London Airport', 289);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(17, 'Economic', 55,  'Paris Airport', 'London Airport', 121);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(18, 'Economic', 180,  'Paris Airport', 'London Airport', 121);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(19, 'Economic', 120,  'Paris Airport', 'London Airport', 101);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(20, 'Economic', 50,  'Paris Airport', 'London Airport', 101);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(9, 'COA977', '2022-12-13 12:00', 'Economic', 149 );
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(10, 'COA977', '2022-12-13 12:00', 'Economic', 148);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(11, 'COA977', '2022-12-13 12:00', 'Economic', 147);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(12, 'COA977', '2022-12-13 12:00', 'Economic', 146);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(13, 'COA977', '2022-12-13 12:00', 'Economic', 145);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(14, 'COA977', '2022-12-13 12:00', 'Economic', 144);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(15, 'COA977', '2022-12-13 12:00', 'Economic', 143);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(16, 'COA977', '2022-12-13 12:00', 'Economic', 142);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(17, 'COA977', '2022-12-13 12:00', 'Economic', 141);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(18, 'COA977', '2022-12-13 12:00', 'Economic', 140);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(19, 'COA977', '2022-12-13 12:00', 'Economic', 139);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(20, 'COA977', '2022-12-13 12:00', 'Economic',138 );

SELECT C.nume, MIN(B.valoare) as valoare_minima, ROUND(AVG(B.valoare), 2) as valoare_medie, MAX(B.valoare) as valoare_maxima
FROM Clienti C
JOIN Bilete B ON C.idclient = B.idclient
GROUP BY C.nume;

----------15.07 a)------

INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('AIF212', '2022-08-15 10:45', '2022-08-15 13:05', 'A', 'B', 'AIRBUS 310-325', 100);
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(123, 'Economic', 200,  'A', 'B', 101);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(123, 'AIF212', '2022-08-15 10:45', 'Economic',89 );

------15.07 b)

DELETE FROM Clienti
WHERE idclient NOT IN (SELECT idclient
                       FROM Bilete);

--------15.07 c)

INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('COA111', '2022-08-03 10:45', '2022-08-03 13:05', 'Timisoara', 'Cluj', 'AIRBUS 310-325', 100);
INSERT INTO Zboruri(nrzbor, plecare, sosire, de_la, la, aparat_zbor, nr_locuri) VALUES('COA333', '2022-08-03 16:00', '2022-08-03 19:05', 'Timisoara', 'Craiova', 'Boeing 777', 100);
INSERT INTO Clienti(idclient, nume, adresa, statut, telefon) VALUES (666, 'Popescu Ion', 'Timisoara', 'C', '0765001234');
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(40, 'Economic', 100,  'Timisoara', 'Cluj', 666);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(40, 'COA111', '2022-08-03 10:45', 'Economic',11 );
INSERT INTO Bilete(nrbilet, clasa, valoare, sursa, destinatia, idclient) VALUES(41, 'Economic', 200,  'Timisoara', 'Craiova', 666);
INSERT INTO Cupoane(nrbilet, nrzbor, plecare, clasa_efectiva, loc) VALUES(41, 'COA333', '2022-08-03 16:00', 'Economic',20 );

UPDATE Bilete 
SET valoare = valoare * 0.98
WHERE sursa IN (
    SELECT de_la
    FROM Zboruri
    WHERE de_la = 'Timisoara' AND DATE(plecare) = DATE('2022-08-03') 
);

---------15.08 a)

DELIMITER //
CREATE TRIGGER trigger_aparat_zbor
BEFORE UPDATE ON Zboruri
FOR EACH ROW
BEGIN
  DECLARE v_count INT;
  SELECT COUNT(*) INTO v_count FROM Cupoane WHERE nrzbor = OLD.nrzbor;
  IF v_count > 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Cannot modify flight with associated coupons';
  END IF;
END//
DELIMITER ;

-----15.08 B)

DELIMITER $$
CREATE TRIGGER trigger_statut 
AFTER DELETE OR INSERT ON BILETE 
FOR EACH ROW 
BEGIN 
  DECLARE sumaClient DECIMAL(10,2); 
  
  IF (INSERTING) THEN 
    SELECT SUM(valoare) INTO sumaClient FROM BILETE WHERE idclient = NEW.idclient;
  ELSEIF (DELETING) THEN 
    SELECT SUM(valoare) INTO sumaClient FROM BILETE WHERE idclient = OLD.idclient; 
  END IF;

  IF (sumaClient + NEW.valoare > 1000) THEN 
    UPDATE CLIENTI SET statut = 'VIP' WHERE idclient = NEW.idclient; 
    SELECT CONCAT('Suma ', (sumaClient + NEW.valoare));
  ELSEIF (sumaClient - OLD.valoare < 1000) THEN 
    UPDATE CLIENTI SET statut = 'C' WHERE idclient = OLD.idclient;
    SELECT CONCAT('Suma ', (sumaClient - OLD.valoare));
  END IF;
END $$
DELIMITER ;





