import "./TaskCard.css";
import "../../App.css";
import "../OutlinedButton/OutlinedButton";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
const TaskCard = ({onClickTables, onClick3a, onClick3b, onClick4a, onClick4b, onClick5a, onClick5b, onClick6a, onClick6b}) => {
    return (
        <div className="containerTaskCard">
            <div className="welcomeText hugeText section1">Bun venit, Bildea Cristian!</div>
            <div className="activityText extraLargeText section2">Aplicatie de gestiunea a unui aeroport</div>
            <div className="buttonsActivity section3">

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" onClick={onClickTables} labelColor="#fff" label="Afiseaza continutul tabelelor" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick3a} label="Exercitiul 3:a)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick3b} label="Exercitiul 3:b)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick4a} label="Exercitiul 4:a)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick4b} label="Exercitiul 4:b)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick5a} label="Exercitiul 5:a)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick5b} label="Exercitiul 5:b)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick6a} label="Exercitiul 6:a)" extraClasses="xsText"/>
                </div>

                <div className="sectionButton">
                    <OutlinedButton backgroundColor="#1B2430" isRounded="true" labelColor="#fff" onClick={onClick6b} label="Exercitiul 6:b)" extraClasses="xsText"/>
                </div>

            </div>
        </div>
    );
}

export default TaskCard;